#!/usr/bin/env bash
 
alias cleos='docker exec -i eosio /opt/eosio/bin/cleos --url http://127.0.0.1:7777 --wallet-url http://127.0.0.1:5555'

# unlock the wallet, ignore error if already unlocked
# pass $1 type $2 Contractpath $3 contractname $4 ownerkey $5 iscontract $6 

if [ ! -z default ]; then cleos wallet unlock --password "$1"  || true; fi


if [ "$2" = "push" ]; then
# pass type contractname actionname data accountname 
echo "push action exec $3 $4  $5  -p $6@active"
cleos push action $3 $4  $5  -p $6@active
#	cleos push action addressbook upsert '["a", "alicew", "liddell", "123 drinwwk me way", "wonderland", "amsterdam22w"]' -p a@active

fi

if [ "$2" = "compile" ];then
	 
	eosio-cpp -o $3$4/$4.wasm $3$4/$4.cpp --abigen
	cleos set contract $4 $3$4/
	
fi


if [ "$2" = "create" ];then
	 
	if [ "$6" = 1 ];then
		echo "create contract account and folder in path"
		cleos create account eosio $4 $5	
		cd $3
		mkdir $4 && cd $4
		touch $4.cpp
		contractTemplate='#include <eosiolib/eosio.hpp> \n
						 #include <eosiolib/print.hpp> \n
				using namespace eosio;	\n

				class '$7' : public eosio::contract { \n
				  public: \n
				      using contract::contract; \n

				      [[eosio::action]]\n
				      void hi( account_name user ) {\n
					 print( " Hello ", name{user} );\n
				      }\n
				};\n
				\n
				EOSIO_ABI( '$7', (hi) ) \n'
		echo $contractTemplate >> $4.cpp
		 		
		
	else
		echo "normal account"
		cleos create account eosio $4 $5	
	fi

 	
fi
