const express = require('express');
const  Server = require('ws');


const app = express()

app.use(express.json());


const key = "TeHVyee453GSjdjuSHhdKSh3837dJS73j738Hdjh7838djhs389Hjshdh"

const CheckAuth = function (req, res, next) {

    const header = req.headers.auth

    if (header) {

        if (header == key) {

            next()

        } else {
            res.status(404).send(
                {
                "Message": "Wrong key"
                }
            )
        }

    } else {
        res.status(404).send(
            {
            "Message": "No header auth"
            }
        )
    }

}



//app.use(CheckAuth)


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`It Is ready to rock http://localhost:${PORT}`))

// __________________________Websocket__________________________

const wss = new Server.WebSocketServer({ server }, );

wss.on("upgrade", () => {
    console.log("uppgrade")
})

wss.on('connection', () => {
    console.log('Client connected');
    wss.on("message", (message) => {
        console.log("hejhej")
        res.send(message)
    }) 
});


// _________________________Get_________________________________

app.get('/', (req, res) => {

    console.log("request receved")

    
    wss.clients.forEach((client) => {
        client.send(new Date().toTimeString());
    });

   wss.on("message", (message) => {
        console.log("hejhej")
        res.send(message)
   }) 

}) 