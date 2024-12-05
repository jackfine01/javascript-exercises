let string = '';
let num = 1;
let finalstring = '';
const repeatString = function(string, num) {

    for(let i = 0 ; i<num ; i++ ){
        finalstring += string;
        return finalstring;
    };
    finalstring = '';
};

// Do not edit below this line
module.exports = repeatString;
