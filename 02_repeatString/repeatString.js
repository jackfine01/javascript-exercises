let string = '';
let num = 1;

const repeatString = function(string, num) {
    let finalstring = '';
    if(num<0){
        finalstring = "ERROR";
    }
    else{
        for(let i = 0 ; i<num ; i++ ){
            finalstring += string;
        };
    return finalstring;
    };
};
// Do not edit below this line
module.exports = repeatString;
