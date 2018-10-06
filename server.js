const express = require('express')
const shell = require('shelljs')
const path1 = require('path');
const app = express()

const exec = require('child_process').exec;
require('dotenv').config()
const port = process.env.port;
var bodyParser = require('body-parser');
//app.use(express.static(__dirname));
app.use(express.static(path1.join(__dirname, "public")));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var password = process.env.Walletkey;
var  path = process.env.path;

app.get('/', (req, res) => {
 

    res.sendFile(__dirname + '/public/index.html');

})


app.listen(port, () => { 
console.log(`Example app listening on port ${port}!`)})

//eosio-cpp -o abcounter.wasm abcounter.cpp --abigen
//cleos set contract abcounter /home/hasura/Music/contracts/abcounter/

 
