const fibonacci = function(num) {
    if(num <= 0) return 'OOPS';
    if(num == 1 || num == 2) return 1;
    let a = 1;
    let b = 1;
    let total = 2;
    for (let i = 2; i < num - 1; i++) {
        a = b;
        b = total;
        total = a + b; 
    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
