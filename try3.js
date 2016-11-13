

var abiArray = [
    {
        "constant": false,
        "inputs": [],
        "name": "get_reward",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "get_question",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_question",
                "type": "string"
            },
            {
                "name": "_answer",
                "type": "string"
            }
        ],
        "name": "set_question",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_answer",
                "type": "string"
            }
        ],
        "name": "check_answer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_question",
                "type": "string"
            },
            {
                "name": "_answer",
                "type": "string"
            }
        ],
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "",
                "type": "string"
            }
        ],
        "name": "Print",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "PrintInteger",
        "type": "event"
    }
]



var Web3 = require('web3')
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

//var coinbase = web3.eth.coinbase;
//console.log(coinbase);

//var balance = web3.eth.getBalance(coinbase);
//console.log(balance.toString(10));

var contractAddress = "0x6149D50AEde716aecac99FBECA8736e8974d8879";



function setUpFilter(contract){
    var filter = web3.eth.filter([contract.Print]);
    filter.watch(handlePrintEvent);

    var filter2 = web3.eth.filter([contract.PrintInteger]);
    filter2.watch(handlePrintIntegerEvent);
}

var handlePrintEvent = function (error,result){
    if(!error) {
        console.log(result);
        //var orderAddress = '0x' + result.data.slice(26,66);
        //console.log(orderAddress);
        //var order = orderContract.at(orderAddress);
        //var status = order.status.call({from: web3.eth.accounts[0],gas: 2000000});
        //console.log((status.c[0]));

    } else {
        console.error(new Date() + " " + error);

    }
}


var handlePrintIntegerEvent = function (error,result){
    if(!error) {
        console.log(result);
        //var orderAddress = '0x' + result.data.slice(26,66);
        //console.log(orderAddress);
        //var order = orderContract.at(orderAddress);
        //var status = order.status.call({from: web3.eth.accounts[0],gas: 2000000});
        //console.log((status.c[0]));

    } else {
        console.error(new Date() + " " + error);

    }
}




var contract = web3.eth.contract(abiArray).at(contractAddress);

setUpFilter(contract);

var result = contract.get_question.call();
console.log(result);


var result = contract.get_reward.call();
console.log(result);

var tx = contract.set_question.sendTransaction(
    "so long and",
    "thanks for all the fish",
    {
        value: 15,
        to: contractAddress,
        from: web3.eth.accounts[0],
        gas: 2000000,
        // data: [ "so long and",
        //   "thanks for all the fish"]
    },
    function(err, address) {
        if (err) {
            console.log("Failure callback!");
            console.error(err);
        } else {
            console.log("Success callback - Address: " + address);
        }
    });

console.log("Transaction ID is ",tx);

var result = contract.get_reward.call();
console.log(result);

var result = contract.get_question.call();
console.log(result);