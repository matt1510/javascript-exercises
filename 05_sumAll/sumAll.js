const sumAll = function(start, end) {
    let smaller = 0;
    let larger = 0;
    let sum = 0;
    function counter(smaller, larger) {
        for (let i = smaller; i <= larger; i++){
            sum += i;
        }
    };

    if (start < 0 || end < 0 || typeof start != 'number' || typeof end != 'number'){
        return 'ERROR';
    } else if (end < start){
        smaller = end;
        larger = start;
        counter(smaller, larger);
    } else {
        smaller = start;
        larger = end;
        counter(smaller, larger);
        }
    return sum;
    };

// Do not edit below this line
module.exports = sumAll;
