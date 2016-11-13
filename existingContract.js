//var web3 = require('web3');
var defs = require('./Defs.json');

var Web3 = require('web3')
var web3 = new Web3()

function sendOrder(){
    //oC.createOrder.sendTransaction("client1","file1", {from: web3.eth.accounts[0],gas: 2000000});
    //console.log("Order Sent");

    var result = contract.get_question.call();
    console.log(result);

    var result = contract.get_reward.call();
    console.log(result);

    var tx = contract.check_answer.sendTransaction(
        "fish",
        {
            value: 15,
            /*from: web3.eth.accounts[0],gas: 2000000*/
        },
            function(err, address) {
                if (err)
                    console.error(err);
                else
                    console.log(address);
            });
    console.log("Transaction ID is ",tx);

    var result = contract.get_reward.call();
    console.log(result);
}




//function setUpFilter(contract){
//    var filter = web3.eth.filter([contract.orderStatusChanged]);
//    filter.watch(orderEvent);
//
//}

var orderEvent = function (error,result){
    if(!error) {
        console.log(result);
        var orderAddress = '0x' + result.data.slice(26,66);
        console.log(orderAddress);
        var order = orderContract.at(orderAddress);
        var status = order.status.call({from: web3.eth.accounts[0],gas: 2000000});
        console.log((status.c[0]));

    } else {
        console.error(new Date() + " " + error);

    }
}

//web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
//var oCAbi = defs.orderControllerAbi;
//var oCAddress = defs.orderControllerAddress;
//var oCContract = web3.eth.contract(oCAbi);
//var oC = oCContract.at(oCAddress);
//var orderAbi = defs.orderAbi;
//var orderContract = web3.eth.contract(orderAbi);

var abi = '[{"constant":true,"inputs":[],"name":"hello","outputs":[{"name":"","type":"bool"}],"type":"function"}]'
var binary = '606060405260658060106000396000f360606040526000357c01000000000000000000000000000000000000000000000000000000009004806319ff1d21146037576035565b005b604260048050506058565b6040518082815260200191505060405180910390f35b6000600190506062565b9056'

var MyContract = Pudding.whisk(abi, binary)
var myContract = MyContract.at('0xabcd')

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
var oCAbi = defs.orderControllerAbi;
var oCAddress = defs.orderControllerAddress;
var oCContract = web3.eth.contract(oCAbi);
var oC = oCContract.at(oCAddress);
var orderAbi = defs.orderAbi;
var orderContract = web3.eth.contract(orderAbi);

//setUpFilter(oCContract);
sendOrder();