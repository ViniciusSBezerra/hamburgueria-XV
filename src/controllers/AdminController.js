const Admin = require("../database/models/admin");
const bcrypt = require("bcrypt");
module.exports = {
    async createAdmin(req, res) {

        let { userName, password, email } = req.body;

        password = await bcrypt.hash(password, 8)


        if (userName == "") {
            return res.json({
                message: "userName é obrigatorio!"
            })
        }
        else if (password == "") {
            return res.json({
                message: "password é obrigatorio!"
            })
        }
        else if (email == "") {
            return res.json({
                message: "Email é obrigatorio"
            })
        }
        else {
            await Admin.create({ userName, password, email }).then(() => {
                return res.json({
                    message: "admin cadastrado com sucesso!"
                })
            })
        }
    },

    async listAdmin(req, res) {
        await Admin.findAll().then((Admins) => {
            return res.json({
                Admins
            });
        });
    },



    async deleteAdmin(req, res) {
        await Admin.destroy({ where: { id: req.params.id } }).then(() => {
            return res.json({
                error: false,
                message: "Admin DELETADA COM SUCESSO!"
            })
        })
    }

}