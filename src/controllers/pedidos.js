const pedidos = require("../../dados/pedidos.json")


const criar = (req, res) => {

    const dados = req.body

    dados.id = Number(pedidos[pedidos.length - 1].id) + 1

    pedidos.push(dados)

    res.status(201).json(dados)

}

const listar = (req, res) => {

    res.json(pedidos)

}

const alterar = (req, res) => {

    const id = Number(req.params.id)
    const dados = req.body

    pedidos.forEach((pedido) => {

        if (pedido.id == id) {
            pedido.cliente = dados.cliente
            pedido.produto = dados.produto
            pedido.quantidade = dados.quantidade
        }

    })

    res.send("Pedido alterado com sucesso")

}

const excluir = (req, res) => {

    const id = Number(req.params.id)

    pedidos.forEach((pedido, indice) => {

        if (pedido.id == id) {
            pedidos.splice(indice, 1)
        }

    })

    res.send("Pedido excluído com sucesso")

}

module.exports = {

    criar, listar, alterar, excluir

}

