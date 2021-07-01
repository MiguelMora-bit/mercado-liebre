const express = require("express");
const path = require("path");
const app = express();

//motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

publicPath = path.join(__dirname,"/public");

app.use( express.static(publicPath) );

app.get('/', (req, res) => {
    res.render("home")
});

app.get('/register', (req, res) => {
    res.render("register");
})

app.get('/login', (req, res) => {
    res.render("login");
})

app.listen(3030, () => 
    console.log("El servidor esta corriendo en el puerto 3030")
);
