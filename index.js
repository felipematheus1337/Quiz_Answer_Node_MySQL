const express = require("express");
const app = express();
const bodyParser = require("body-parser")


// Estou dizendo para o express usar o EJS como View Engine
app.set("view engine","ejs");
app.use(express.static('public'))

//Body parser
app.use(bodyParser.urlencoded({extended: false})); //tradução para estrutura Javascript
app.use(bodyParser.json());


//Rotas
app.get("/",(req,res) => {
   
    res.render('index');

});

app.get("/perguntar",(req,res) => {
    res.render("perguntar")
})


app.post("/salvarpergunta",(req,res) => {

   var titulo = req.body.titulo;
   var descricao = req.body.descricao
   res.send("Formulário recebido! título " + titulo + " " + "descricao" + descricao);
   //res.status(201).send(titulo);
});


app.listen(8080,(e) => {
    if(!e) {
        console.log("App rodando...");
    } else {
        console.log("Erro ao iniciar Servidor!");
    }
    
});


