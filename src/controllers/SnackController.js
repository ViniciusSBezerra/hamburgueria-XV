const Snacks = require("../database/models/snacks");
const multer = require("multer");
const multerConfig = require("../config/MulterConfig");
const upload = multer(multerConfig).single("file");


module.exports = {

    async listSnacks(req, res) {

        await Snacks.findAll().then((snacks) => {
            return res.json({
                snacks
            });
        });
    },

    async registerSnacks(req, res) {

        upload(req, res, (err) => {

            const { name, price, description } = req.body;
            const { path } = req.file;
        
            if (name == "") {
                return res.json({
                    message: "Não é possivel cadastrar um lanche sem nome!"
                });
            }
            else if (price == "") {
                return res.json({
                    message: "Não é possivel cadastrar um lanche sem preço!"
                });

            }
            else if (description == "") {
                return res.json({
                    message: "Não é possivel cadastrar um lanche sem descrição!"
                });
            }

            else{
               
                Snacks.create({ name, price, description, path }).then(() => {
                    return res.json({
                        message: "Lanche cadastrado com sucesso!"
                    });
                });
            }

        })
    },

    async changeSnack(req, res) {
        const { name, price, description } = req.body;

        await Snacks.update({ name, price, description }, {
            where: { id: req.params.id },
        }).then(() => {
            return res.json({
                message: "Snacks ALTERADO COM SUCESSO!"
            })
        })


    },

    async deleteSnack(req, res) {

        await Snacks.destroy({ where: { id: req.params.id } }).then(() => {
            return res.json({
                error: false,
                message: "Snacks APAGADO COM SUCESSO!"
            })
        })


    },
}