const removeFromArray = function(parameterArray, ...theArgs) {

let filtered = parameterArray;

        for(let i = 0;i<theArgs.length;i++){

            for(let j = 0;j<parameterArray.length;j++){

                if(theArgs[i]==parameterArray[j]){

                    filtered = parameterArray.filter(theArgs[i]); 

                };      
            };
        };

return filtered;

};

// Do not edit below this line
module.exports = removeFromArray;
