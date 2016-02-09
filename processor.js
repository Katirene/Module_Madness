var convertusd = require('./convert-usd');
var randomNumber = require('./randomNumber');

var processor = function (min, max){
    var num = randomNumber(min, max);

    var salary = convertusd(num);

    return salary;
};

var textAdd = function() {
    return "Account balance: \n"
};

exports.processor = processor;
exports.textAdd = textAdd;