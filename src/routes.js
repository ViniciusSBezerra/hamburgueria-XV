const routes = require('express').Router();
const lancheController = require('./controllers/LancheController');
const bebidaController = require('./controllers/BebidaController');
const comboController = require('./controllers/ComboController');

routes.get("/", lancheController.listarLanches),
routes.post("/cadastrarLanche", lancheController.cadastrarLanches),
routes.put("/alterarLanche/:id", lancheController.alterarLanches),
routes.delete("/deletarLanche/:id", lancheController.deletarLanche),

routes.post("/cadastrarBebida", bebidaController.cadastrarBebida),
routes.get("/bebidas", bebidaController.listarBedibas),
routes.put("/alterarBebida/:id", bebidaController.alterarBebida),
routes.delete("/deletarBebida/:id", bebidaController.deletarBebida),

routes.post("/cadastrarCombo", comboController.cadastrarCombo),
routes.get("/combos", comboController.listarCombos),
routes.put("/alterarCombo/:id", comboController.alterarCombo),
routes.delete("/deletarCombo/:id", comboController.deletatCombo),


module.exports = routes;