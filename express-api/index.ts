const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.json({
    ok: true,
    msg: "Todo gud!",
  });
});

app.listen(port, () => {
  console.log(`Servidor ejecutandose en el puerto ${port}`);
});
