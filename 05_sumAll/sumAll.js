const sumAll = function(begin, end) {
    if(begin < 0 || end < 0) return 'ERROR';
    if (typeof(begin) != typeof(1) || typeof(end) != typeof(1)){
        return 'ERROR';
    }
    let sum = 0;
    if(end > begin){
        for(let i = begin; i <= end; i++){
            sum += i;
        }
        return sum;
    }
    else {
        for(let i = end; i <= begin; i++){
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
