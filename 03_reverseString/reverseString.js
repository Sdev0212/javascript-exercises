const reverseString = function(string) {
    array = string.split("");
    let newString = "";
    let length = array.length - 1;
    for (let i=0; i <= length; i++) {
        newString = newString + array[length - i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
