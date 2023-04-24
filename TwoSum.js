
const nums = [3,2,4]
var target = 6
var twoSum = function(nums, target) {
    result = []

    for(let i = 0; i < nums.length; i++){

        let num = target - nums[i]
    
        if(nums.indexOf(num) != -1){
            result.push(i)
            let index = nums.indexOf(num)
            result.push(index)
            return result
        }


    }
    return result += "No solution"
};

console.log(twoSum(nums, target))