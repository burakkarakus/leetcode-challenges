/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    var map = new Map();
    strs.forEach(str => {
        var orderedStr = str.split("").sort().join();
        if (!map.has(orderedStr)) {
            map.set(orderedStr, [str]);
        }
        else {
            map.get(orderedStr).push(str);
        }
    });
    return Array.from(map.values());
};