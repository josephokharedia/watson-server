import express from 'express';
import bodyParser from 'body-parser'
import {sendMessage} from './app.js';

const app = express();
app.use( bodyParser.json() );

app.get('/', (req, res) => res.send('Hi. From Watson'));

app.post('/', (req,res)=>{
    let text = req.body.text? req.body.text : '';
    sendMessage(text, (err, response)=>{
        if(err || !response.output.text) {
            res.status(500).send('Something broke!');
        }
        else{
            console.log('response:', response)
            res.status(200).send(response.output.text);
        }
    });
});

app.listen(3000, () => console.log('Watson listening...'));