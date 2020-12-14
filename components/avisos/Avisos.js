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
.then( _ => {
  return { tipo: "sucesso", corpo: "Dados inseridos com sucesso." }
})
.catch(erro => {
   return{tipo: "erro", corpo: "Erro: " + erro}
})
} //fim do salvar


/**
 * Alterar um aviso no banco de dados
 * @param {object} aviso O aviso deve estar no seguinte formato: {titulo, data. mensagem}
 * @param {int} id ID do aviso
 * @returns {object} Mensagem de sucesso ou de erro 
 */

function editar(aviso, id){
  return db('avisos').where('ID_avisos', id).update(aviso)
.then( _ => {
  return { tipo: "sucesso", corpo: "Aviso alterado com sucesso." }
})
.catch(erro => {
   return{tipo: "erro", corpo: "Erro: " + erro}
})//fim do editar
  

}





/**
 * Seleciona todos os avisos cadastrados
 * @returns {object} Objeto com todos os avisos cadastrados ou mensagem de rro
 */

function selecionarTodos(){
 return db.select('*').from('avisos').orderBy('data','ASC')
 .then(avisos =>{ return avisos })
 .catch(erro => { 
   return { tipo: "erro", corpo: "Erro: " + erro} 
})

}//fim do selecionar todos

/**
 * Essa função seleciona um aviso
 * @param {*} id id do aviso selecionado
 * @returns {object} objeto com o aviso selecionado
 */

function selecionarAviso(id){
  return db.select('*').from('avisos').where('ID_avisos',id).first()
  .then(aviso => {return aviso})
  .catch(erro => { 
    return { tipo: "erro", corpo: "Erro: " + erro} 
 })
} //fim do selecionar aviso


/**
 * Função que exclui um aviso do banco de dados
 * @param {*} id Id do aviso
 */
function excluir(id){
return db.del().from('avisos').where('ID_avisos', id)
}

module.exports = {salvar, selecionarTodos, excluir, selecionarAviso, editar}


