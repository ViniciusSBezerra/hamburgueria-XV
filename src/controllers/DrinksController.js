const Drinks = require("../database/models/drinks");

module.exports = {

    async registerDrink(req, res) {
        const { name, price } = req.body;
        const drinkAlreadExists = await Drinks.findOne({ where: { name } });

        if (drinkAlreadExists) {
            return res.json({
                error: true,
                message: "Erro: Bebida já cadastrada!"
            })
        }

        if(name == ""){
            return res.json({
                error: true,
                message: "Erro! Nome da bebida é obrigatorio!"
            });
        }

        if(price == ""){
            return res.json({
                error: true,
                message: "Erro! Preço da bebida é obrigatorio!"
            })
        }

        await Drinks.create({ name, price }).then(() =>{
            return res.json({
                error: false,
                message: "Bebida cadastrada com sucesso!"
            })
        }) 
    },

    async listDrinks(req, res) {
        await Drinks.findAll({}).then((drinks) => {
            return res.json({
                drinks
            })
        })
    },

    async deleteDrink(req, res) {
        await Drinks.destroy({ where: { id: req.params.id } }).then(() => {
            return res.json({
                error: false,
                message: "Bebida deletada com sucesso!"
            })
        })
    },

    async updateDrink(req, res) {
        const { name, preco } = req.body;

        await Drinks.update({ name, preco }, {
            where: { id: req.params.id },
        }).then(() => {
            return res.json({
                error: false,
                message: "Bebida alterada com sucesso!"
            })
        })
    }
}