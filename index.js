const express = require("express");
const app = express();


// Estou dizendo para o express usar o EJS como View Engine
app.set("view engine","ejs");

app.get("/:nome/:lang",(req,res) => {
   let {nome,lang} = req.params
    res.render('index',{
        nome:nome,
        lang:lang,
        empresa: "Felipe Developer",
        inscritos: 8000
    });

});


app.listen(8080,(e) => {
    if(!e) {
        console.log("App rodando...");
    } else {
        console.log("Erro ao iniciar Servidor!");
    }
    
});


