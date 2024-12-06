const leapYears = function(year) {

    let isCent = false;
    if(year % 100 === 0){
        isCent = true;
    }

    let isFourCent = false;
    if(year % 400 === 0){
        isFourCent = true;
    };

    let isFour = false;
    if(year % 4 === 0){
        isFour = true;
    };

    for(let i = 0;i<3;i++){
        let truthIndex = 0;
        if(isFour = true){
            truthIndex++;
        };
        if(isCent = false){
            truthIndex++;
        };
        if(isFourCent = true){
            truthIndex++;
        };
    };

    if(truthIndex = 3){
        return true;
    }
    else
        return false;
};

// Do not edit below this line
module.exports = leapYears;
