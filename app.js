require("dotenv").config();
const express = require("express");
const app = express();
const hbs = require("hbs");

app.set("view engine", "hbs");
app.use(express.static("public"));

hbs.registerPartials(__dirname + "/views/partials");

app.get("/", function (_req, res) {
  res.render("home", {
    nombre: "Oscar Cordero",
    titulo: "Curso de Node",
  });
});

app.get("/elements", (_req, res) => {
  res.render("elements", {
    nombre: "Oscar Cordero",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (_req, res) => {
  res.render("generic", {
    nombre: "Oscar Cordero",
    titulo: "Curso de Node",
  });
});

app.listen(process.env.PORT);
