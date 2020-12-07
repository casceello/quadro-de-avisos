//conexao com banco de dados
const db = require('../../knexfile.js')
const router = require('./AvisosController.js')


/**
 * Inserir um aviso no banco de dados
 * @param {object} aviso O aviso deve estar no seguinte formato: {titulo, data. mensagem}
 * @returns {object} Mensagem de sucesso ou de erro 
 */


function salvar(aviso){
//insert

 return db.insert(aviso).into('avisos')
.then( _ =>{
  return {
    tipo: "sucesso", corpo: "Dados inseridos com sucesso." }
})
.catch(erro =>{
   return{tipo: "erro", corpo: "Erro ao cadastrar o aviso.  "+erro}
})
} //fim do salvar


module.exports = {salvar}


