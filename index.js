var express = require("express");
var app = express();
var server = require("http").Server(app);
var path = require("path");

var socketApi = require('./webSocketApi');

var id = 0;

const port = process.env.PORT || 8000;
var messages = [];

app.use(express.static(path.join(__dirname, "public")));

socketApi.connect("http://localhost:8091/websocket-example");

app.get("/", (req, res) => res.status(200).send("hola"));


// INICIAMOS EL SERVIDOR HTTP
server.listen(port, () => console.log("Servidor corriendo en http:localhost:" + port));