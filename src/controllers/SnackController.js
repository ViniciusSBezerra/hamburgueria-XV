const Snacks = require('../database/models/snacks');
const multer = require('multer')
const multerConfig = require('../config/MulterConfig')
const upload = multer(multerConfig).single('file')


module.exports = {

    async listSnacks(req, res) {
        await Snacks.findAll().then((snacks) => {
            return res.json({
                snacks
            });
        });
    },

    async registerSnacks(req, res) {

        upload(req, res, (err) =>{
            const {name, price, description} = req.body
            
            const {path} = req.file

            if (err instanceof multer.MulterError) {
                // A Multer error occurred when uploading.
            } else if (err) {
                // An unknown error occurred when uploading.
            }else{
                Snacks.create({name, price, description, path}).then((err) =>{
                    return res.json({
                        message: "lache cadastrado com sucesso!"
                    })
                })
                   
                  
            }
              
            
        })


        // const { name, preco, descricao } = req.body;
        // const {} = req.file;
        // const verificarSnacks = await Snacks.findOne({ name });

        // if (name == "") {
        //     return res.json({
        //         error: true,
        //         message: "ERRO: NÃO É POSSIVEL CADASTRAR UM LANHE SEM O NOME!"
        //     })
        // }
        // else if (preco == "") {
        //     return res.json({
        //         error: true,
        //         message: "ERRO: NÃO É POSSIVEL CADASTRAR UM LANHE SEM O PREÇO!"
        //     })
        // }
        // else if (descricao == "") {
        //     return res.json({
        //         error: true,
        //         message: "ERRO: NÃO É POSSIVEL CADASTRAR UM Snacks SEM A DESCRIÇÃO!"
        //     })
        // }
        // else if (verificarSnacks) {
        //     return res.json({
        //         error: true,
        //         message: "ESTE Snacks JÁ FOI CADASTRADO NO SISTEMA!"
        //     })
        // }

        // else {
        //   const data =  await Snacks.create({ name, preco, descricao })
        //         .then(() => {
        //             return res.json({
        //                 error: false,
        //                 message: "Snacks CADASTRADO COM SUCESSO!"
        //             });
        //         })

        //         console.log(data)

       // }
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