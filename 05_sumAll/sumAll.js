const sumAll = function(start, end) {

    let startCheck = start % 1 ===0;
    let endCheck = end % 1 === 0;

    let sumNum = 0;
    let first = 0;
    let last = 0;
    let arrayAdd = [first, last];

    if(start>end){
        first += start;
        last += end;
    }
    else{
        first += end;
        last += start;
    }

    if(start.typeof != Number 
        || start.typeof != BigInt 
        || start < 0 
        || startCheck == false){
            return 'ERROR';
    }
    else if (end.typeof != Number 
                || end.typeof != BigInt 
                || end < 0
                || endCheck == false){
            return 'ERROR';
    }
    else{
        for(let i = first+1; i < last ;i++){
            arrayAdd.push(i);
        }
        sumNum += arrayAdd.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue,
        );

        return sumNum;
    }
};

// Do not edit below this line
module.exports = sumAll;
