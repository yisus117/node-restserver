require('./config/config')

const express = require("express");

const app = express();

const bodyParser = require("body-parser");

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/usuario", function (req, res) {
    res.send("get usuario");
});

app.post("/usuario", function (req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            err: {
                message: "algo salio mal ",
            },
        });
    }

    res.status(200).json({ body });
});

app.put("/usuario/:id", function (req, res) {
    let id = req.params.id;

    res.json({
        id,
    });
});

app.delete("/usuario/:id", function (req, res) {
    res.send("delete usuario");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port  ${process.env.PORT }`);
});
