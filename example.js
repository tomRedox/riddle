// Example of how to listen to events - not actually part of our code.
// Creates a new contract each time rather than reusing the exsiting one.
// Relies on a defs.json file that isn't present in this repo

var web3 = require('web3');
var defs = require('./Defs.json');

function sendOrder(){
    oC.createOrder.sendTransaction("client1","file1", {from: web3.eth.accounts[0],gas: 2000000});
    console.log("Order Sent");
}

function setUpFilter(contract){
    var filter = web3.eth.filter([contract.orderStatusChanged]);
    filter.watch(orderEvent);

}

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

web3.setProvider(new web3.providers.HttpProvider('http://iot.ethereumoxford.org:8545'));
var oCAbi = defs.orderControllerAbi;
var oCAddress = defs.orderControllerAddress;
var oCContract = web3.eth.contract(oCAbi);
var oC = oCContract.at(oCAddress);
var orderAbi = defs.orderAbi;
var orderContract = web3.eth.contract(orderAbi);



setUpFilter(oCContract);
sendOrder();