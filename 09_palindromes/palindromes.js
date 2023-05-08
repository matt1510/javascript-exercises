const palindromes = function (text) {
    nothing = text.toLowerCase().replace(/[^a-z]/g, '');
    reversed = nothing.split('').reverse().join('');
    if (nothing === reversed) {
        return true;
    } else {
        return false;
    }

};
//palindromes('Racecar!')

// Do not edit below this line
module.exports = palindromes;
