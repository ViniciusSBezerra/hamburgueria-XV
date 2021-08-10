const Admin = require("../database/models/admin");
const bcrypt = require("bcrypt");

module.exports = {

    async createAdmin(req, res) {
        let {userName, password, email } = req.body;
        const userAlreadyExists = await Admin.findOne({ where : { email } });

        password = await bcrypt.hash(password, 8)

        if(userAlreadyExists){
            return res.json({
                error: true,
                message: "Erro: Usuario já cadastrado!"
            });
        }

        await Admin.create({
            userName,
            password,
            email
        }).then(() => {
            return res.json({
                error: false,
                message: "Usuario cadastrado com sucesso!"
            })
        })
    },

    async listAdmin(req, res) {
       await Admin.findAll({
           attributes: ['id','userName', 'email']
       })
       .then((admins)=>{
           return res.json({
               admins
           })
       })
    },

    async updateAdmin(req, res){

        let {userName, email, password} = req.body;

        password = await bcrypt.hash(password, 8)

        await Admin.update({ userName, email, password }, {
            where: { id: req.params.id },
        }).then(()=>{
            return res.json({
                error: false,
                message: "Usuario alterado com sucesso!"
            })
        })
    },

    async deleteAdmin(req, res) {

        await Admin.destroy({ where: { id: req.params.id } })
        .then(() => {
            return res.json({
                error: false,
                message: "Admin DELETADA COM SUCESSO!"
            })
        })
    }

}