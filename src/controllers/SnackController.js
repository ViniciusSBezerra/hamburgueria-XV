const Snacks = require("../database/models/snacks");

module.exports = {

    async listSnacks(req, res) {
        await Snacks.findAll().then((snacks) => {

            if(snacks == ""){
                return res.json({
                    error: true,
                    message: "Erro: Lanches não encontrados!"
                })
            }

            return res.json({
                snacks
            });
        });
    },

    async registerSnacks(req, res) {
      
            
        const { name, price, description } = req.body;
            
        
        if (name == "") {
            return res.json({
                message: "Não é possivel cadastrar um lanche sem nome!"
            });
        }
        if (price == "") {
            return res.json({
                message: "Não é possivel cadastrar um lanche sem preço!"
            });

        }
        if (description == "") {
            return res.json({
                message: "Não é possivel cadastrar um lanche sem descrição!"
            });
        }
        Snacks.create({ name, price, description }).then(() => {
            return res.json({
                message: "Lanche cadastrado com sucesso!"
            });
        });
    },

    async changeSnack(req, res) {
        const { name, price, description } = req.body;

        await Snacks.update({
            name,
            price,
            description
        },{
            where: { id: req.params.id },
        }).then(() => {
            return res.json({
                message: "Lanche alterado com sucesso!"
            })
        })
    },

    async deleteSnack(req, res) {
        await Snacks.destroy({ where: { id: req.params.id } }).then(() => {
            return res.json({
                error: false,
                message: "Lanche apagado com sucesso!"
            })
        })
    },
}