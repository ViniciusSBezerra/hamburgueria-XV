
const Combo = require("../database/models/combos");

module.exports = {

    async registerCombo(req, res) {

        const { name, snack, potato, drink, price, description } = req.body;

        if (name == "") {
            return res.json({
                error: true,
                message: "ERRO! O NOME DO COMBO É OBRIGATORIO!"
            })
        }
        else if (snack == "") {
            return res.json({
                error: true,
                message: "ERRO! O NOME DO LANCHE É OBRIGATORIO!"
            })
        }
        else if (potato == "") {
            return res.json({
                error: true,
                message: "ERRO! O TAMANHO DA BATATA É OBRIGATORIO!"
            })
        }
        else if (drink == "") {
            return res.json({
                error: true,
                message: "ERRO! O NOME DA BEBIDA É OBRIGATORIO!"
            })
        }
        else if (price == "") {
            return res.json({
                error: true,
                message: "ERRO! O PREÇO DO COMBO É OBRIGATORIO!"
            })
        }
        else if (description == "") {
            return res.json({
                error: true,
                message: "ERRO! A DESCRIÇÃO DO COMBO É OBRIGATORIA!"
            })
        }
        else {
            await Combo.create({ name, snack, potato, drink, price, description })
                .then(() => {
                    return res.json({
                        error: false,
                        message: "COMBO CADASTRADO COM SUCESSO!"
                    })
                })
        }

    },

    async listCombo(req, res) {
        await Combo.findAll().then((combos) => {
            return res.json({
                messages: "COMBOS CADASTRADOS",
                combos
            });
        });
    },

    async deleteCombo(req, res) {
        await Combo.destroy({where: { id: req.params.id}})
        .then(()=>{
            return res.json({
                error: false,
                message: "COMBO DELETADO COM SUCESSO!"
            })
        })
    },

    async changeCombo(req, res){

        const { name, snack, potato, drink, price, description } = req.body;
        
        await Combo.update({name, snack, potato, drink, price, description}, {
            where: { id: req.params.id}
        })
        .then(() =>{
            return res.json({
                message: "COMBO ALTERADO COM SUCESSO!"
            })
        })
    }
}