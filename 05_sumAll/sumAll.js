const sumAll = function(start, end) {

    let startCheck = start % 1 ===0;
    let endCheck = end % 1 === 0;

    let sumNum = 0;
    let first = 0;
    let last = 0;
    let arrayAdd = [first, last];

    if(start>end){
        first === start;
        last === end;
    }
    else{
        first === end;
        last === start;
    }

    // if(start.typeof != Number == true
    //     || start < 0 == true
    //     || startCheck == false){
    //         return 'ERROR';
    // }
    // else if (end.typeof != Number == true
    //             || end < 0 == true
    //             || endCheck == false){
    //         return 'ERROR';
    // }

    // else{
        for(let i = first; i < last ;i++){
            arrayAdd.push(i);
        }


        return arrayAdd;
    // }
};

// Do not edit below this line
module.exports = sumAll;
