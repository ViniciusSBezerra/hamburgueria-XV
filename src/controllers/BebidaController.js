const Bebida = require('../database/models/bebidas');

module.exports = {

    async cadastrarBebida(req, res) {
        const {name, preco} = req.body;
        const verificarBedida = await Bebida.findOne({ name });

        if(name == ""){
            return res.json({
                error: true,
                message: "ERRO! O NOME DA BEBIDA É OBRIGATORIO!"
            })
        }
        else if(preco == ""){
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
            await Bebida.create({name, preco})
            .then(() => {
                return res.json({
                    error: false,
                    message: "BEBIDA CADASTRADA COM SUCESSO!"
                })
            })
        }
    },

    async listarBedibas(req, res){
        await Bebida.findAll({}).then((bebidas) =>{
            return res.json({
                message: "BEBIDAS: ",
                bebidas
                
            })
        })
    },

    async deletarBebida(req, res){
        await Bebida.destroy({ where: {id: req.params.id}}).then(() =>{
            return res.json({
                error: false,
                message: "BEBIDA DELETADA COM SUCESSO!"
            })
        })
    },

    async alterarBebida(req, res){
        const {name, preco} = req.body;

        await Bebida.update({name, preco}, {
            where: {id: req.params.id},
        }).then(() =>{
            return res.json({
                error: false,
                message: "BEBIDA ALTERADA COM SUCESSO!"
            })
        })
    }


}