const express = require("express"),
  server = express(),
  cors = require("cors"),
  mysql = require("mysql");

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "produtosepedidos",
});

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.json({
    message: "Server connected!",
  });
});

server.get("/produtos", (req, res) => {
  const sql =
    "SELECT * FROM produtos JOIN categorias ON produtos.idcategoria = categorias.idcategoria";
  database.query(sql, (err, results) => {
    if (err) {
      res.json({
        message: "Failed to connect to the database!",
      });
    }
    res.status(200).json(results);
  });
});

server.get("/comentarios", (req, res) => {
  const sql =
    "SELECT *,date_format(data,'%d/%m/%Y as %H:%ihs') AS databr FROM comentarios ORDER BY databr DESC";
  database.query(sql, (err, results) => {
    if (err) {
      res.json({
        message: "Failed to connect to the database!",
      });
    }
    res.status(200).json(results);
  });
});

server.post("/comentarios", (req, res) => {
  const { nome, email, msg } = req.body;
  const sql = `INSERT INTO comentarios (nome, email, msg) values ('${nome}', '${email}', '${msg}')`;
  database.query(sql, (error, results) => {
    if (error) {
      res.send("Erro na conexão com o banco de dados");
    }
    res.status(201).json(results);
  });
});

server.listen(1987, () => {
  console.log("Server on!");
});
