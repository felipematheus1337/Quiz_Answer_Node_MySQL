const express = require("express");
const app = express();


// Estou dizendo para o express usar o EJS como View Engine
app.set("view engine","ejs");

app.get("/",(req,res) => {
    res.render('principal/perfil')
});


app.listen(8080,(e) => {
    if(!e) {
        console.log("App rodando...");
    } else {
        console.log("Erro ao iniciar Servidor!");
    }
    
});


