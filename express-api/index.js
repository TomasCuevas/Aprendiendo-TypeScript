var express = require("express");
var app = express();
var port = 4000;
app.get("/", function (req, res) {
    res.json({
        ok: true,
        msg: "Todo gud!"
    });
});
app.listen(port, function () {
    console.log("Servidor ejecutandose en el puerto ".concat(port));
});
