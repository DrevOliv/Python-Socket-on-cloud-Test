const { Server } = require('ws');

const wss = new Server({ port: process.env.PORT || 3000 });



wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('close', () => console.log('Client disconnected'));
});
   
setInterval(() => {

    wss.clients.forEach((client) => {
        client.send("hejhej Det funkar")
        client.close()
    })
    
}, 1000);


