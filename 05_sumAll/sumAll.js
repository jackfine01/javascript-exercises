const sumAll = function(start, end) {

    let first = start;
    let last = end;
    let arrayAdd = [first, last];

    if(first>last){
        first = end;
        last = start;
    }

   
        for(let i = first; i < last ;i++){
            arrayAdd.push(i);
        }
        let sumNum = arrayAdd.reduce(
            (accumulator, currentValue) => accumulator + currentValue, first);
        return sumNum;
    
};

// Do not edit below this line
module.exports = sumAll;
