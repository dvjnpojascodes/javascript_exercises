const reverseString = function(word) {

    var strArray = word.split(""); //output: ["h", "e", "l", "l", "o"]
    var strReverse = strArray.reverse(); //output: ["o", "l", "l", "e", "h"]
    var reversedstr = strReverse.join(""); //output: ollel

    return reversedstr;
};

// Do not edit below this line
module.exports = reverseString;
