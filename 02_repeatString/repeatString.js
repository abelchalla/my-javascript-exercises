const repeatString = function(string, amount) {
    if (amount < 0) return "ERROR";
    let new_string = '';
    for (let i = 0; i < amount; i++) {
        new_string += string;
    }
    return new_string;
};
// Do not edit below this line
module.exports = repeatString;
