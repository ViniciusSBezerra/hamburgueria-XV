const jsonwebtoken = require("jsonwebtoken");
const { promisify } = require("util")

module.exports = {
    async auth(req, res, next) {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.json({
                error: true,
                message: "Erro: Necessario realizar login para acessar a pagina"
            })
        }
        const [, token] = authHeader.split(" ")

        if (!token) {
            return res.json({
                error: true,
                message: "Erro: Necessario realizar login para acessar a pagina"
            })
        }

        try {
            const decode = await promisify(jsonwebtoken.verify)(token, process.env.key)
            req.userId = decode.id;
            return next();
        } catch (error) {
            return res.json({
                error: true,
                message: "Erro: Token invalido"
            })
        }

    }
}