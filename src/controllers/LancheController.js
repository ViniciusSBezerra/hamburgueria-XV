const Lanche = require('../database/models/lanches');
const ComboController = require('./ComboController');

module.exports = {

    async listarLanches(req, res) {
        await Lanche.findAll().then((lanches) => {
            return res.json({
                messages: "LANCHES CADASTRADOS",
                lanches
            });
        });
    },

    async cadastrarLanches(req, res) {
        const { name, preco, descricao } = req.body;
        const verificarLanche = await Lanche.findOne({ name });

        if (name == "") {
            return res.json({
                error: true,
                message: "ERRO: NÃO É POSSIVEL CADASTRAR UM LANHE SEM O NOME!"
            })
        }
        else if (preco == "") {
            return res.json({
                error: true,
                message: "ERRO: NÃO É POSSIVEL CADASTRAR UM LANHE SEM O PREÇO!"
            })
        }
        else if (descricao == "") {
            return res.json({
                error: true,
                message: "ERRO: NÃO É POSSIVEL CADASTRAR UM LANCHE SEM A DESCRIÇÃO!"
            })
        }
        else if (verificarLanche) {
            return res.json({
                error: true,
                message: "ESTE LANCHE JÁ FOI CADASTRADO NO SISTEMA!"
            })
        }

        else {
            await Lanche.create({ name, preco, descricao })
                .then(() => {
                    return res.json({
                        error: false,
                        message: "LANCHE CADASTRADO COM SUCESSO!"
                    });
                })

        }

    },

    async alterarLanches(req, res) {
        const { name, valor, descricao } = req.body;

        await Lanche.update({ name, valor, descricao }, {
            where: { id: req.params.id },
        }).then(() => {
            return res.json({
                message: "LANCHE ALTERADO COM SUCESSO!"
            })
        })


    },

    async deletarLanche(req, res) {

        await Lanche.destroy({ where: { id: req.params.id } }).then(() => {
            return res.json({
                error: false,
                message: "LANCHE APAGADO COM SUCESSO!"
            })
        })


    },

   
}