
const Combo = require("../database/models/combos");

module.exports = {

    async registerCombo(req, res) {

        let { name, snack, potato, drink, price, description } = req.body;

        const comboAlreadyExists = await Combo.findOne({ where : { name }})

        if(comboAlreadyExists){
            return res.json({
                error: true,
                message: "Erro: Combo já cadastrado!"
            });
        }

        if (name == "") {
            return res.json({
                error: true,
                message: "Erro! Nome do combo é obrigatorio!"
            })
        }
        if (snack == "") {
            return res.json({
                error: true,
                message: "Erro! Nome do lanche é obrigatorio!"
            })
        }
        if (potato == "") {
            return res.json({
                error: true,
                message: "Erro! Tamanho da batata é obrigatorio!"
            })
        }
        if (drink == "") {
            return res.json({
                error: true,
                message: "Erro! Nome da bebida é obrigatorio!"
            })
        }
        if (price == "") {
            return res.json({
                error: true,
                message: "Erro! O preço do combo é obrigatorio!"
            })
        }
        if (description == "") {
            return res.json({
                error: true,
                message: "Erro! A descrição do combo é obrigatorio!"
            })
        }
        
        await Combo.create({ name, snack, potato, drink, price, description })
            .then(() => {
                return res.json({
                    error: false,
                    message: "Combo cadastrado com sucesso!"
                })
            })
    },

    async listCombo(req, res) {
        await Combo.findAll().then((combos) => {
            return res.json({
                combos
            });
        });
    },

    async deleteCombo(req, res) {
        await Combo.destroy({where: { id: req.params.id}})
        .then(()=>{
            return res.json({
                error: false,
                message: "Combo deletado com sucesso!"
            })
        })
    },

    async updateCombo(req, res){

        const { name, snack, potato, drink, price, description } = req.body;
        
        await Combo.update({name, snack, potato, drink, price, description}, {
            where: { id: req.params.id}
        })
        .then(() =>{
            return res.json({
                message: "Combo alterado com sucesso!"
            })
        })
    }
}