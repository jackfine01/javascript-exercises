const reverseString = function(str) {
    let reversedString = "";
    for( let i=str.length ; i > 0 ; i-- ){
        reversedString += str.charAt(str.length - 1);
    };
    str.slice(0,-1);
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
