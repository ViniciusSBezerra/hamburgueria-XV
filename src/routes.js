const routes = require('express').Router();

const SnackController = require('./controllers/SnackController');
const DrinksController = require('./controllers/DrinksController');
const ComboController = require('./controllers/ComboController');
const AdminController = require('./controllers/AdminController');
const Login = require('./middlewares/login');
const authentication = require('./middlewares/authentication');



routes.get("/", authentication.authentication, SnackController.listSnacks),
routes.post("/cadastrarLanche",   SnackController.registerSnacks),
routes.put("/alterarLanche/:id",  SnackController.changeSnack),
routes.delete("/deletarLanche/:id", SnackController.deleteSnack),

routes.post("/cadastrarBebida", DrinksController.registerDrink),
routes.get("/bebidas", DrinksController.listDrinks),
routes.put("/alterarBebida/:id", DrinksController.updateDrink),
routes.delete("/deletarBebida/:id", DrinksController.deleteDrink),

routes.post("/cadastrarCombo", ComboController.registerCombo),
routes.get("/combos", ComboController.listCombo),
routes.put("/alterarCombo/:id", ComboController.updateCombo),
routes.delete("/deletarCombo/:id", ComboController.deleteCombo),

routes.post("/createAdmin",  AdminController.createAdmin);
routes.get("/listAdmin",  AdminController.listAdmin);
routes.delete("/deleteAdmin/:id", AdminController.deleteAdmin);
routes.put("/updateAdmin/:id", AdminController.updateAdmin);

routes.post("/login", Login.Login)

module.exports = routes;