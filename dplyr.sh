#!/usr/bin/env bash
 
alias cleos='docker exec -i eosio /opt/eosio/bin/cleos --url http://127.0.0.1:7777 --wallet-url http://127.0.0.1:5555'

# unlock the wallet, ignore error if already unlocked
# pass $1 type $2 Contractpath $3 contractname $4 ownerkey $5 iscontract $6 

if [ ! -z default ]; then cleos wallet unlock --password "$1"  || true; fi
