# EOSdplyr
An Eos smart contract deployer from frontend
#### Repository

https://github.com/yashwanth2804/EOSdplyr



### What is EOSdplyr

*cleos is a command line interface which used to interact with blockchain*

Being an entry level developer in EOS,it is hard for me to manage multiple terminal windows opened ,its a very time consuming process,confusing.This EOSdplyr aims to speed-up the development process by simple GUI action from web ,which intern executes the normal bash actions.  



### Prerequisites

Please follow the [Develpoers docs](https://developers.eos.io/eosio-home/docs)

make sure `cloes` command executes after you run the docker image .

> Note  your `CONTRACTS_DIR` folder absolute path,`development key` and `wallet key`.[provide these to .env file in project folder]



### Targeted developers

This is targeted for the entry level developers in EOS platform,It is suggested to have development enviroment setup with CLION or alternative as you mature.

### Install && Setup
Clone the repo 
`git clone https://github.com/yashwanth2804/EOSdplyr.git`<br>
`cd Eosdplyr`<br>
`npm install`<br>
`npm start`<br><br>
Change `.env` file configurations <br>
 `Walletkey`, your wallet imported private key. <br>
 `path`, absolute path for the contract folder. (should ends with forwardslash `/` )<br>
 `Developmentkey` , this is the key which used to create accounts.<br>
 <br>
 > make sure you don't  expose keys in deployment environment  
 
now open the browser `http://localhost:3001/`
<br>
> Run `docker start eosio` if you have't started docker service

### Features



#### Create Account 
![Deployment-ca.png](https://cdn.steemitimages.com/DQmRV2dkmWY53cj9qdUZK1Q6qdvUcYWVzDN6FYkxN1JvDUi/Deployment-ca.png)
This snippet will create the account with the name given by you.
 


 
#### Create Contract Account


This snippet will create the contract account and generates the folder with provided contract name and cpp file with basic template of `hello` smartcontract.


![deployment-attacktanos-Contract.png](https://cdn.steemitimages.com/DQmRhEL6QFV8VvZEw8zdXGSC5fh32d3zA8Qfa7aaa3Baz9K/deployment-attacktanos-Contract.png)

> `CONTRACTS_DIR/ContractName/ContractName.cpp`

     

### Compile & Set Contract

![updatedCompilecontract.png](https://cdn.steemitimages.com/DQmNwHonsm2hiq4E2TiTPcfJ9RQcwVxEsV9JS3UG7Mmbce8/updatedCompilecontract.png)

This snippet will compile the cpp file and generates the `wasm` and `abi` files,

after the compilation this will be pushed to blockchain using `set contract`

    

--------------

### Push Action

![push-action.png](https://cdn.steemitimages.com/DQmPZ4wtsqY3AvcDi8TQR8exsaiyFUtsctch5pAEeJ9EV8w/push-action.png)
This snippet will be used to push actions to contract in blockchain.



___________

### Get Table

![table.png](https://cdn.steemitimages.com/DQmWP5iq3ohQmp4Jyj9HCDR7a3pxue2XmeUB5DK8rCpuj51/table.png)
This snippet will gets the table from smart contract.



---------------



## Tech Stack 

Node,express,Html,Css,Bash script  

    

## How to contribute?



- Fork it [https://github.com/yashwanth2804/EOSdplyr]

- Clone it

    [https://github.com/<your_github_name>/EOSdplyr.git or git@github.com:<your_github_name>/EOSdplyr.git]

    - git clone https://github.com/<your_github_name>/EOSdplyr.git

- Create a branch

    - cd first-contributions

    - git checkout -b

- Add features  

    - git add <your work>

    - git commit -m "what your features"

- push it

    - git push origin <yours>

    - Submit a pull request



#### GitHub Account

https://github.com/yashwanth2804
