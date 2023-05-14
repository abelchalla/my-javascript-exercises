const palindromes = function (strings) {
    strings = strings.toLowerCase();
    let re = /[a-z]/g;
    let newString = strings.match(re).join("");
    for(let i = 0, j = newString.length - 1; i <= j; i++, j--) {
        if(newString[i] != newString[j]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
