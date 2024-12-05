const sumAll = function(start, end) {

    let startCheck = start % 1 ===0;
    let endCheck = end % 1 === 0;

    let sumNum = 0;
    let first = start;
    let last = end;
    let arrayAdd = [first, last];

    if(first>last){
        first = end;
        last = start;
    }

    if(start.typeof != Number == false
        || start < 0 == false
        || startCheck == false){
            return 'ERROR';
    }
    else if (end.typeof != Number == false
                || end < 0 == false
                || endCheck == false){
            return 'ERROR';
    }

    else{
        for(let i = first; i < last ;i++){
            arrayAdd.push(i);
        }
        const sum = numbers.reduce(
            (accumulator, currentValue) => accumulator + currentValue, first);
        return arrayAdd;
    }
};

// Do not edit below this line
module.exports = sumAll;
