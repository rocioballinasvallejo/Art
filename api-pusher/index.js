const express = require('express')
const cors = require('cors')
const Pusher = require("pusher");

const app = express();
const pusher = new Pusher({
    appId: "1713696",
    key: "4aba788829882b5dc967",
    secret: "d69f7dd2d67c646a6261",
    cluster: "mt1",
    useTLS: true
});

app.use(cors({
    origin: ['http://localhost:3000']
}))
app.use(express.json())

app.post('/api/messages', async (req, res) => {
    await pusher.trigger("chat", "message", {
        username: req.body.username,
        message: req.body.message
    });

    res.json([]);
})

console.log('listening to port 8000');
app.listen(8000)
