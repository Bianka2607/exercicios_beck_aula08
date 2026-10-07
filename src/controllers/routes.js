

const express = require("express")
const router = express.Router()
const Pedido = require("./pedidos")
const Itens = require("./itens")
const Cliente = require("./clientes")
const Produto = require("./produtos")


const rotaInicial = (req, res) => {

    res.json("Pedidos MVC respondendo")

}

router.get('/', rotaInicial)

router.post('/itens', Itens.criar)
router.get('/itens', Itens.listar)
router.put('/itens/:id', Itens.alterar)
router.delete('/itens/:id', Itens.excluir)


router.post('/pedidos', Pedido.criar)
router.get('/pedidos', Pedido.listar)
router.put('/pedidos/:id', Pedido.alterar)
router.delete('/pedidos/:id', Pedido.excluir)



router.post('/clientes', Cliente.criar)
router.get('/clientes', Cliente.listar)
router.put('/clientes/:id', Cliente.alterar)
router.delete('/clientes/:id', Cliente.excluir)



router.post('/produtos', Produto.criar)
router.get('/produtos', Produto.listar)
router.put('/produtos/:id', Produto.alterar)
router.delete('/produtos/:id', Produto.excluir)

module.exports = router