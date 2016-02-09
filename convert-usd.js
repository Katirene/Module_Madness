var convertUSD = function(num){
 var num = num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
 return num;
};

module.exports = convertUSD;

