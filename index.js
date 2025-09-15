const express = require("express");
const path = require("path");
const session = require("express-session");
const db = require("./db");

const app = express();

// Middleware para arquivos estáticos (HTML, CSS)
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true })); // lê formulários HTML
app.use(express.json()); // opcional, se algum dia usar JSON

const createTag = () => {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `#${num}`;
};

// Função que gera uma tag única para o username
const generateUniqueTag = (username, callback) => {
  const tryTag = () => {
    const tag = createTag();

    const checkSql = "SELECT * FROM usuarios WHERE tag = ?";
    db.get(checkSql, [tag], (err, row) => {
      if (err) return callback(err);

      if (row) {
        // Já existe → tenta de novo
        tryTag();
      } else {
        // Não existe → achamos uma tag válida
        callback(null, tag);
      }
    });
  };

  tryTag();
};

// Rota de registro
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  generateUniqueTag(username, (err, tag) => {
    if (err) {
      console.error("Erro ao gerar tag:", err.message);
      return res.status(500).send("Erro interno no servidor");
    }

    const sql =
      "INSERT INTO usuarios (username, tag, email, password) VALUES (?, ?, ?, ?)";
    db.run(sql, [username, tag, email, password], function (err) {
      if (err) {
        if (err.message.includes("UNIQUE")) {
          return res.send("Este email já está registrado.");
        }
        console.error("Erro ao registrar:", err.message);
        return res.status(500).send("Erro interno no servidor");
      }

      // Sucesso → redireciona
      res.redirect("/index.html");
    });
  });
});

// Rota de login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM usuarios WHERE email = ? AND password = ?";
  db.get(sql, [email, password], (err, row) => {
    if (err) {
      console.error("Erro no banco:", err.message);
      return res.status(500).send("Erro interno no servidor");
    }

    if (row) {
      // Redireciona para a página home
      res.redirect("/home.html");
    } else {
      res.send("Email ou senha inválidos.");
    }
  });
});

db.all("SELECT * FROM usuarios", [], (err, rows) => {
  if (err) {
    return console.error("Erro ao consultar o banco:", err.message);
  }

  console.log("=== Usuários no banco ===");
  rows.forEach((row) => {
    console.log(`ID: ${row.id}, Email: ${row.email}, Senha: ${row.password}`);
  });
  console.log("========================");
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
