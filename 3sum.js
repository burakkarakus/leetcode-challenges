// INCOMPLETE
var threeSum = function (nums) {
    var sorted = nums.sort((a, b) => a - b)
    var outputArr = []
    for (let i = 0; i < nums.length - 2; i++) {
        if (i == 0 || (i > 0 && nums[i] != nums[i - 1])) {
            var low = i + 1;
            var high = nums.length - 1;
            var sum = 0 - nums[-1];

            while (low < high) {
                if (nums[low] + nums[high] == sum) {
                    outputArr.push(nums[i], nums[low], nums[high])
                    while (low < high && nums[low] == nums[low + 1]) low++;
                    while (low < high && nums[high] == nums[high - 1]) high--;
                    low++;
                    high--;
                } else if (nums[low] + nums[high] > sum) {
                    high--;
                } else {
                    low++;
                }
            }
        }
    }

    return outputArr
};

var arr = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(arr))