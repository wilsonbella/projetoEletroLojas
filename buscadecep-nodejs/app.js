const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const buscaCep = require("./src/functions/buscaCep");
const buscaGit = require("./src/functions/buscaGit");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/enviacep", async (req, res) => {
  const { cep } = req.body;
  const resultado = await buscaCep(cep);

  res.render("resultado", { dado: resultado });
});

app.post("/enviagit", async (req, res) => {
  const { login } = req.body;
  const resultado = await buscaGit(login);

  res.render("resultado-git", { dado: resultado });
});

app.listen(3333);
