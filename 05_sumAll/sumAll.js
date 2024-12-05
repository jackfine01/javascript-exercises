const sumAll = function(start, end) {
    
    if(start < 0 || end < 0){
        return "ERROR";
    };

    let startInteger = Number.isInteger(start);
    let endInteger = Number.isInteger(end);

    if(startInteger === false || endInteger === false){
        return "ERROR";
    };

    let firstNum = start;
    let lastNum = end;

    if(start>end){
        firstNum = end;
        lastNum = start;
    };

    let sumArray = [firstNum,lastNum];
    for(
        let i = firstNum+1; 
        i != lastNum; 
        i++
    ){
        sumArray.push(i);
    };

    let finalSum = 0;
    for(
        let j = 0;
        j < sumArray.length;
        j++
    ){
        finalSum += sumArray[j];
    };

    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
