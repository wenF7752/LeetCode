const arr1 = [1, 2, 3, 4, 5]
const t = 4

const twoSum = (arr, target) => {
  const map = {}
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    const diff = target - num
    if (map[diff] !== undefined) {
      return [map[diff], i]
    }
    map[num] = i
  }
  return []
}
console.log(twoSum(arr1, t))
