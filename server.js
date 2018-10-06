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


app.post('/table', function(req, res) {
  
    var type = "table";
    var contract = req.body.contractT;
    var scope = req.body.scopeT;
    var tablename = req.body.tablenameT;

     
   var yourscript = exec('sh dplyr.sh '+password +" "+type+" "+contract + " "+scope+" "+tablename,
   (error, stdout, stderr) => {

       var objOut = {
           "stdout":`${stdout}`,
           "stderr":`${stderr}`,
           "error":`${error}`
       }
      
       
       res.send(objOut);
   });


});

app.post('/compile', function(req, res) {
    
    var type = "compile";
    var contractName = req.body.accountname;
     
   var yourscript = exec('sh dplyr.sh '+password +" "+type+" "+path + " "+contractName,
   (error, stdout, stderr) => {

       var objOut = {
           "stdout":`${stdout}`,
           "stderr":`${stderr}`,
           "error":`${error}`
       }
      
       
       res.send(objOut);
   });


});

app.post('/push', function(req, res) {
   var type = "push";
   var contractName = req.body.accountname;
   var action = req.body.action;
   var data = req.body.Pushdata;
    
   var authorizeAccount = req.body.authorizeAccount;
    //cleos push action addressbook upsert '["a", "alicew", "liddell", "123 drinwwk me way", "wonderland", "amsterdam"]' -p a@active
  var yourscript = exec('sh dplyr.sh '+password +" "+type+" "+contractName+" "+ action +" "+data+" "+authorizeAccount ,
  (error, stdout, stderr) => {

   console.log( `${stdout}:${stderr}:${error}` );
       var objOut = {
           "stdout":`${stdout}`,
           "stderr":`${stderr}`,
           "error":`${error}`
       }
      
   res.send( objOut );
  });



});


app.post('/createA', function(req, res) {
    
    var type = "create";
    var contractFileName = req.body.accountname;

    var contractName = req.body.accountname;
        if(contractName.includes(".")){
            console.log("##### has . ####");
            contractName = contractName.split(".")[1];
        }
    var ownerkey =process.env.Developmentkey;
    var isContract = req.body.chk;
    
     
    //dplyr.sh is a bash file where cleos exists
   var deployscript = exec('sh dplyr.sh '+password +" "+type+" "+path + " "+contractFileName+" "+ownerkey +" "+isContract+" "+contractName,
   (error, stdout, stderr) => {
   
    var objOut = {
        "stdout":`${stdout}`,
        "stderr":`${stderr}`,
        "error":`${error}`
    }
       res.send( objOut);

   });


   

});
app.post('/create', function(req, res) {
    var type = "create";

    var contractName = req.body.accountname;
    var isContract = req.body.chk;
    var ownerkey =process.env.Developmentkey;
     //dplyr.sh is a bash file where cleos exists

   var deployscript = exec('sh dplyr.sh '+password +" "+type+" "+path + " "+contractName +" "+ownerkey +" "+isContract,
   (error, stdout, stderr) => {

    var objOut = {
        "stdout":`${stdout}`,
        "stderr":`${stderr}`,
        "error":`${error}`
    }
    res.send( objOut );
   });


   

});
app.listen(port, () => { 
console.log(`Example app listening on port ${port}!`)})

//eosio-cpp -o abcounter.wasm abcounter.cpp --abigen
//cleos set contract abcounter /home/hasura/Music/contracts/abcounter/

 
