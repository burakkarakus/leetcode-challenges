/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumberFirstTry = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        var sorted = nums.sort();

        if (sorted[i] === sorted[i + 1]) {
            i++;
        }
        else {
            return sorted[i];
        }
    }
};

// passed, ekrem's solution
var singleNumber = function (nums) {
    const numbersSet = new Set();
    for (const number of nums) {
        if (numbersSet.has(number)) {
            numbersSet.delete(number);
        } else {
            numbersSet.add(number);
        }
    }
    return numbersSet.values().next().value;
};