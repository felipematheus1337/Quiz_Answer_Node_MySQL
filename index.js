const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

// Database
connection
   .authenticate()
   .then(() => {
     console.log("conexão feita com o BD!");
    })
    .catch((err) => {
        console.log(err)
    })



// Estou dizendo para o express usar o EJS como View Engine
app.set("view engine","ejs");
app.use(express.static('public'))

//Body parser
app.use(bodyParser.urlencoded({extended: false})); //tradução para estrutura Javascript
app.use(bodyParser.json());


//Rotas
app.get("/",(req,res) => {
    Pergunta.findAll({raw:true,order:[
        ['id','DESC']
    ]}).then((perguntas) => {
        res.render('index', {
            perguntas: perguntas
        });
    })
    

});

app.get("/perguntar",(req,res) => {
    res.render("perguntar")
})


app.post("/salvarpergunta",(req,res) => {
   var titulo = req.body.titulo;
   var descricao = req.body.descricao
   Pergunta.create({
     titulo:titulo,
     descricao:descricao
   }).then(() => {
      res.redirect("/");
   });
   //res.status(201).send(titulo);
});


app.get("/pergunta/:id",(req,res) => {
 var id = req.params.id;
 Pergunta.findOne({
    where: {id: id}
 }).then(pergunta => {
   if(pergunta != undefined) { // Pergunta encontrada!
      res.render("pergunta",{
        pergunta:pergunta
      })
   } else { // Não encontrada
      res.redirect("/")
   } 
 });

});




app.listen(8080,(e) => {
    if(!e) {
        console.log("App rodando...");
    } else {
        console.log("Erro ao iniciar Servidor!");
    }
    
});


