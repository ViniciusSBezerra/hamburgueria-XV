const routes = require('express').Router();

const SnackController = require('./controllers/SnackController');
const DrinksController = require('./controllers/DrinksController');
const comboController = require('./controllers/ComboController');
const testeLogin = require('./controllers/AdminController');

routes.get("/", SnackController.listSnacks),
routes.post("/cadastrarLanche",  SnackController.registerSnacks),
routes.put("/alterarLanche/:id",  SnackController.changeSnack),
routes.delete("/deletarLanche/:id", SnackController.deleteSnack),

routes.post("/cadastrarBebida", DrinksController.registerDrink),
routes.get("/bebidas", DrinksController.listDrinks),
routes.put("/alterarBebida/:id", DrinksController.changeDrink),
routes.delete("/deletarBebida/:id", DrinksController.deleteDrink),

routes.post("/cadastrarCombo", comboController.registerCombo),
routes.get("/combos", comboController.listCombo),
routes.put("/alterarCombo/:id", comboController.changeCombo),
routes.delete("/deletarCombo/:id", comboController.deleteCombo),

routes.post("/createAdmin", testeLogin.createAdmin)
routes.post("/login", testeLogin.login)
routes.get("/listAdmin", testeLogin.listAdmin)
routes.delete("/deleteAdmin/:id", testeLogin.deleteAdmin)

module.exports = routes;