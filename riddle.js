var Web3 = require('web3');
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}


function doSomething(contract) {
    var result = contract.get_question.call();
    console.log(result);

    var result = contract.get_reward.call();
    console.log(result);

    var tx = contract.check_answer.sendTransaction("fish",{value: 15, from: web3.eth.accounts[0],gas: 2000000});
    console.log("Transaction ID is ",tx);

    var result = contract.get_reward.call();
    console.log(result);
}

function checkAnswer(contract)
{
    var result = contract.check_answer.call("test")
}


var _question = "what is the meaning of life" ;
var _answer = "42" ;
var riddleContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"get_reward","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"get_question","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_question","type":"string"},{"name":"_answer","type":"string"}],"name":"set_question","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_answer","type":"string"}],"name":"check_answer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"inputs":[{"name":"_question","type":"string"},{"name":"_answer","type":"string"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"string"}],"name":"Print","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"uint256"}],"name":"PrintInteger","type":"event"}]);
var riddle = riddleContract.new(
   _question,
   _answer,
   {
     from: web3.eth.accounts[0], 
     data: '60606040526040516109f33803806109f3833981016040528080518201919060200180518201919060200150505b8160006000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061007c57805160ff19168380011785556100ad565b828001600101855582156100ad579182015b828111156100ac57825182600050559160200191906001019061008e565b5b5090506100d891906100ba565b808211156100d457600081815060009055506001016100ba565b5090565b50508060016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061012957805160ff191683800117855561015a565b8280016001018555821561015a579182015b8281111561015957825182600050559160200191906001019061013b565b5b5090506101859190610167565b808211156101815760008181506000905550600101610167565b5090565b50505b505061085b806101986000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480631afe22a61461005d57806326bda3e014610085578063b914485e14610105578063d1aaf6ad146101bd57610058565b610002565b346100025761006f600480505061022e565b6040518082815260200191505060405180910390f35b346100025761009760048050506102a0565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156100f75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34610002576101a56004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091905050610419565b60405180821515815260200191505060405180910390f35b34610002576102166004808035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509090919050506106b4565b60405180821515815260200191505060405180910390f35b60007fbdeafd8940f02bec6b6e8b3e9b0e8a0cd6d9b8326fce0f8baba90f24c47b54fd3073ffffffffffffffffffffffffffffffffffffffff16316040518082815260200191505060405180910390a13073ffffffffffffffffffffffffffffffffffffffff1631905061029d565b90565b60206040519081016040528060008152602001507f241ba3bafc919fb4308284ce03a8f4867a8ec2f0401445d3cf41a468e7db4ae0600060005060405180806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156103635780601f1061033857610100808354040283529160200191610363565b820191906000526020600020905b81548152906001019060200180831161034657829003601f168201915b50509250505060405180910390a160006000508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561040a5780601f106103df5761010080835404028352916020019161040a565b820191906000526020600020905b8154815290600101906020018083116103ed57829003601f168201915b50505050509050610416565b90565b600061043c600060005060206040519081016040528060008152602001506106c4565b15610613578260006000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061049057805160ff19168380011785556104c1565b828001600101855582156104c1579182015b828111156104c05782518260005055916020019190600101906104a2565b5b5090506104ec91906104ce565b808211156104e857600081815060009055506001016104ce565b5090565b50508160016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061053d57805160ff191683800117855561056e565b8280016001018555821561056e579182015b8281111561056d57825182600050559160200191906001019061054f565b5b509050610599919061057b565b80821115610595576000818150600090555060010161057b565b5090565b50507f241ba3bafc919fb4308284ce03a8f4867a8ec2f0401445d3cf41a468e7db4ae06040518080602001828103825260158152602001807f4e6577207175657374696f6e20776173207365742e000000000000000000000081526020015060200191505060405180910390a1600190506106ae566106ad565b7f241ba3bafc919fb4308284ce03a8f4867a8ec2f0401445d3cf41a468e7db4ae060405180806020018281038252602a8152602001807f4e6f206e6577207175657374696f6e207365742c20746865726520616c72656181526020017f6479206973206f6e652e0000000000000000000000000000000000000000000081526020015060400191505060405180910390a1600090506106ae565b5b92915050565b6000600190506106bf565b919050565b600060006020604051908101604052806000815260200150600085925084915081518380546001816001161561010002031660029004905014151561070c5760009350610852565b600090505b828054600181600116156101000203166002900490508110156108495781818151811015610002579060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168382815460018160011615610100020316600290048110156100025790908154600116156107e35790600052602060002090602091828204019190065b9054901a7f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614151561083b5760009350610852565b5b8080600101915050610711565b60019350610852565b5050509291505056', 
     gas: 4700000
   }, function (e, contract){
    //console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);

    doSomething(riddle);

    }
 })