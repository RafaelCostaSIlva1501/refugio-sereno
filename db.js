const sqlite3 = require("sqlite3").verbose();

// cria/abre banco local
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("Erro ao conectar no banco:", err.message);
  } else {
    console.log("Banco conectado com sucesso!");
  }
});

db.serialize(() => {
  db.run(
    `
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      tag TEXT UNIQUE,
      username TEXT,
      email TEXT UNIQUE,
      password TEXT
    )
  `,
    (err) => {
      if (err) {
        console.error("Erro ao criar tabela:", err.message);
      } else {
        console.log("Tabela 'usuarios' criada com sucesso!");
      }
    }
  );
});

module.exports = db;
