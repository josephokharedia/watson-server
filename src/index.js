import express from 'express';
import bodyParser from 'body-parser'
import {sendMessage} from './app.js';

let allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Content-Type','application/json');
    next();
}

const app = express();
app.use( bodyParser.json() );  
app.use( allowCrossDomain );  

app.get('/', (req, res) => res.send('Hi. From Watson'));

app.post('/', (req,res)=>{
    let text = req.body.text? req.body.text : '';

    sendMessage(text, (err, response)=>{
        if(err || !response.output.text) {
            res.status(500).send(`Something broke! ${err}`);
        }
        else{
            console.log('response:', response);
            res.status(200).send(JSON.stringify(response));
        }
    });
});

app.listen(3000, () => console.log('Watson listening...'));