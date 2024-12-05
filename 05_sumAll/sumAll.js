const sumAll = function(start, end) {
    
    let firstNum = start;
    let lastNum = last;

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
