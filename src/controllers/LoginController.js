const Admin = require("../database/models/admin");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

module.exports = {

    async Login(req, res) {
        const { userName, email, password } = req.body
        const admin = await Admin.findOne({
            atributes: ['id', 'userName', 'password'],
            where: {
                userName
            }
        });

        if (admin === null) {
            return res.status(400).json({
                error: true,
                message: "Erro: username ou senha incorreto!"
            })
        }

        if (!(await bcrypt.compare(password, admin.password))) {
            return res.status(400).json({
                error: true,
                message: "Erro: username ou senha incorreto!"
            })
        }

        const token = jsonwebtoken.sign({ id: admin.id }, process.env.key, {
            expiresIn: '7d'
        })

        return res.json({
            message: "username encontrado!",
            token
        })
    }
}