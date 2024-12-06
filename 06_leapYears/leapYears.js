const leapYears = function(year) {

    let isCent = year % 100 === 0;


    let isFourCent = year % 400 === 0;

    let isFour = year % 4 === 0;

    if(isFour && (!isCent || isFourCent)){
        return true;
    }
    else
        return false;
};

// Do not edit below this line
module.exports = leapYears;
