require("dotenv").config();
const express = require("express");
const app = express();
const port = 3333;
const routes = require("../src/routes");
const cors = require("cors");


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Accept, Authorization");
    app.use(cors());
    next();
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

app.listen(port, () =>{
    console.log(`SERVIDOR NA PORTA  http://localhost:${port}`);
});