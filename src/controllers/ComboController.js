

const Combo = require("../database/models/combos");

module.exports = {

    async cadastrarCombo(req, res) {

        const { name, lanche, batata, bebida, preco, descricao } = req.body;

        if (name == "") {
            return res.json({
                error: true,
                message: "ERRO! O NOME DO COMBO É OBRIGATORIO!"
            })
        }
        else if (lanche == "") {
            return res.json({
                error: true,
                message: "ERRO! O NOME DO LANCHE É OBRIGATORIO!"
            })
        }
        else if (batata == "") {
            return res.json({
                error: true,
                message: "ERRO! O TAMANHO DA BATATA É OBRIGATORIO!"
            })
        }
        else if (bebida == "") {
            return res.json({
                error: true,
                message: "ERRO! O NOME DA BEBIDA É OBRIGATORIO!"
            })
        }
        else if (preco == "") {
            return res.json({
                error: true,
                message: "ERRO! O PREÇO DO COMBO É OBRIGATORIO!"
            })
        }
        else if (descricao == "") {
            return res.json({
                error: true,
                message: "ERRO! A DESCRIÇÃO DO COMBO É OBRIGATORIA!"
            })
        }
        else {
            await Combo.create({ name, lanche, batata, bebida, preco, descricao })
                .then(() => {
                    return res.json({
                        error: false,
                        message: "COMBO CADASTRADO COM SUCESSO!"
                    })
                })
        }

    },

    async listarCombos(req, res) {
        await Combo.findAll().then((combos) => {
            return res.json({
                messages: "COMBOS CADASTRADOS",
                combos
            });
        });
    },

    async deletatCombo(req, res) {
        await Combo.destroy({where: { id: req.params.id}})
        .then(()=>{
            return res.json({
                error: false,
                message: "COMBO DELETADO COM SUCESSO!"
            })
        })
    },

    async alterarCombo(req, res){

        const { name, lanche, batata, bebida, preco, descricao } = req.body;
        
        await Combo.update({name, lanche, batata, bebida, preco, descricao}, {
            where: { id: req.params.id}
        })
        .then(() =>{
            return res.json({
                message: "COMBO ALTERADO COM SUCESSO!"
            })
        })
    }

}