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
    let final = false;
    if(isFour === true && isCent === false && isFourCent === true) {
        final = true;
    }
    return final;
};

// Do not edit below this line
module.exports = leapYears;
