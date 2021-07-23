const Drinks = require("../database/models/drinks");

module.exports = {

    async registerDrink(req, res) {
        const {name, price} = req.body;
        const verificarBedida = await Drinks.findOne({ name });

        if(name == ""){
            return res.json({
                error: true,
                message: "ERRO! O NOME DA BEBIDA É OBRIGATORIO!"
            })
        }
        else if(price == ""){
            return res.json({
                error: true,
                message: "ERRO! O PREÇO DA BEBIDA É OBRIGATORIO!"
            })
        }
        else if(verificarBedida){
            return res.json({
                error: true,
                message: "ERRO! ESTA BEBIDA JÁ FOI CADASTRADO NO SISTEMA!"
            })
        }else{
            await Drinks.create({name, price})
            .then(() => {
                return res.json({
                    error: false,
                    message: "BEBIDA CADASTRADA COM SUCESSO!"
                })
            })
        }
    },

    async listDrinks(req, res){
        await Drinks.findAll({}).then((drinks) =>{
            return res.json({
                drinks
            })
        })
    },

    async deleteDrink(req, res){
        await Drinks.destroy({ where: {id: req.params.id}}).then(() =>{
            return res.json({
                error: false,
                message: "BEBIDA DELETADA COM SUCESSO!"
            })
        })
    },

    async changeDrink(req, res){
        const {name, preco} = req.body;

        await Drinks.update({name, preco}, {
            where: {id: req.params.id},
        }).then(() =>{
            return res.json({
                error: false,
                message: "BEBIDA ALTERADA COM SUCESSO!"
            })
        })
    }
}