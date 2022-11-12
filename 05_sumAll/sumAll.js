const sumAll = function(num1, num2) {
    let sum = 0;
    if (typeof(num1)!="number"||typeof(num2)!="number"||num1<0||num2<0){
        return "ERROR";
    } else if(num1 < num2){
        for (num1; num1<=num2; num1++){
            sum = sum + num1;
        }
    } else if(num2 < num1) {
        for(num2; num2<=num1; num2++){
            sum = sum +num2;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
