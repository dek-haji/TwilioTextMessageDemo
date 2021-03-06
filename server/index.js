const express = require('express');
const cors = require('cors');
const twilio =  require('twilio');


const accountSid = "******************";
const authToken = "*******************";
const client = new twilio(accountSid, authToken);

const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send("welcome to express page")
})

app.get('/send-text', (req, res) => {
    const { recepient, textmessage } = req.query
    client.messages.create({
        body: textmessage,
        to: recepient,
        from: '+12017204141'
    }).then((message) => console.log(message.body));
})

app.listen(4000, () => console.log("Running port 4000"));