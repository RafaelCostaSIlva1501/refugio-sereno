// server.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const db = require("./db"); // seu arquivo de conexão SQLite

const app = express();

// Middleware para arquivos estáticos (HTML, CSS)
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.urlencoded({ extended: true })); // lê formulários HTML
app.use(express.json()); // opcional, se algum dia usar JSON
app.use(cookieParser()); // necessário para ler cookies

// ==================== MULTER ====================
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// ==================== UTILITÁRIOS ====================
const createTag = () => {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `#${num}`;
};

const generateUniqueTag = (username, callback) => {
  const tryTag = () => {
    const tag = createTag();
    const checkSql = "SELECT * FROM usuarios WHERE tag = ?";
    db.get(checkSql, [tag], (err, row) => {
      if (err) return callback(err);
      if (row) tryTag();
      else callback(null, tag);
    });
  };
  tryTag();
};

// ==================== MIDDLEWARE AUTENTICAÇÃO ====================
app.use((req, res, next) => {
  if (req.path === "/login" || req.path === "/register") return next(); // libera registro/login

  const token = req.cookies?.token;
  if (!token) return res.status(401).send("Não autenticado");

  try {
    const decoded = jwt.verify(token, "SEGREDO_DO_TOKEN");
    req.userTag = decoded.tag;
    next();
  } catch {
    res.status(401).send("Token inválido");
  }
});

// ==================== ROTAS ====================

// Registro
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  generateUniqueTag(username, (err, tag) => {
    if (err) return res.status(500).send("Erro interno no servidor");

    const sql =
      "INSERT INTO usuarios (username, tag, email, password) VALUES (?, ?, ?, ?)";
    db.run(sql, [username, tag, email, password], function (err) {
      if (err) {
        if (err.message.includes("UNIQUE"))
          return res.send("Este email já está registrado.");
        return res.status(500).send("Erro interno no servidor");
      }
      res.redirect("/index.html");
    });
  });
});

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM usuarios WHERE email = ? AND password = ?";
  db.get(sql, [email, password], (err, row) => {
    if (err) return res.status(500).send("Erro interno no servidor");
    if (!row) return res.send("Email ou senha inválidos.");

    const token = jwt.sign({ tag: row.tag }, "SEGREDO_DO_TOKEN", {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/home.html");
  });
});

// Criar personagem
app.post("/createCharacter", upload.single("photo"), (req, res) => {
  if (!req.file) return res.status(400).send("Nenhuma imagem enviada");

  const imageUrl = `/uploads/${req.file.filename}`;
  const { name, campaign } = req.body;

  const sheet = {
    photo: imageUrl,
    name,
    campaign,
    tag: req.userTag,
  };

  const sql = "INSERT INTO characters (tag, sheet) VALUES (?, ?)";
  db.run(sql, [sheet.tag, JSON.stringify(sheet)], function (err) {
    if (err) return res.status(500).send(err.message);
    res.sendFile(path.join(__dirname, "public", "home.html"));
  });
});

// Retorna todos os personagens do usuário logado
app.get("/api/characters", (req, res) => {
  const sql = "SELECT * FROM characters WHERE tag = ?";
  db.all(sql, [req.userTag], (err, rows) => {
    if (err) return res.status(500).json({ erro: err.message });

    // Converte a coluna sheet de JSON para objeto
    const sheets = rows.map((r) => JSON.parse(r.sheet));
    res.json(sheets);
  });
});

// ==================== LISTAGEM DE USUÁRIOS (DEBUG) ====================
db.all("SELECT * FROM usuarios", [], (err, rows) => {
  if (err) return console.error("Erro ao consultar o banco:", err.message);
  console.log("=== Usuários no banco ===");
  rows.forEach((row) =>
    console.log(`ID: ${row.id}, Email: ${row.email}, Senha: ${row.password}`)
  );
  console.log("========================");
});

// ==================== SERVIDOR ====================
app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
