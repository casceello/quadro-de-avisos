const Avisos = require('./Avisos')

const router = require('express').Router()

router.get("/",(req,res)=>{
    res.send("Pagina Inicial")
})

router.get("/avisos", (req,res)=>{
    res.send("Pagina de avisos cadastrados")
})

router.get("/avisos/novo", (req,res)=>{
    res.render('formulario_avisos.ejs')

    
  //fim da rota
})

router.post("/avisos/novo", async (req,res)=>{
  const titulo = req.body.titulo
  const data = req.body.data
  const mensagem = req.body.mensagem

 const msg = await Avisos.salvar({titulo,data,mensagem})

 res.render('formulario_avisos',{msg})
})
module.exports = router