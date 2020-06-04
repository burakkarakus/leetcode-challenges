/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    var seen = new Set();
    while (!seen.has(n)) {
        if (n === 1) {
            return true;
        }
        else {
            seen.add(n);
            n = `${n}`
                .split("")
                .map(digit => Math.pow(parseInt(digit), 2))
                .reduce((acc, currentValue) => acc + currentValue);

            console.log(n);
        }
    }
    return false;
};

isHappy(19);

