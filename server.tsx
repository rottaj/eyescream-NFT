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

function checkTxnValidity(fileName) {
  console.log("Moved file to postMint:", fileName)
}

let imgPath = "./img/preMint/" // will update every mint... removing previous img. ( All art will be generated before hand )
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("mint.token", (req, res) => {
        console.log(req);
        let svgFile = fs.readdirSync(imgPath)[0];
        let svg = fs.readFileSync(imgPath + svgFile, { encoding: "utf8" })
        console.log("SVG", svg)
        console.log("SVG FILE", svgFile)
        res({
            filename: svg
        })

        // add to own request... if went through, check validity and move file to postMint
        /*
        fs.rename(imgPath + svgFile, "./img/postMint/" + svgFile, (err) =>{     //not good method, add validator to check if txn went through
          console.log(err)                                                                      // if not... return file to ./img/preMint
            
        })
        */         
    })
  });