var app = require('express')();
const cors = require("cors");
const Web3 = require("web3");
const fs = require('fs');
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

app.use(cors({
origin: "*"
}));
http.listen(8080, () => {
    console.log("Listening on port 8080")
})

let filepath = "./img/eyescream_1.svg" // will update every mint... removing previous img. ( All art will be generated before hand )
let svg = fs.readFileSync(filepath, { encoding: "utf8" })
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("mint.token", (req, res) => {
        console.log(req);
        res({
            filename: svg
        })
    })
  });