const repeatString = function(Str, num) {
    var repeat = "";
    if(num<0) {
        repeat = "ERROR";
    } else for (let i = 0; i < num; i++){
        repeat = Str + repeat;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
