const str = 'Heeellllo worldd'
const a = '123'
const removeRepeatChar = (str) => {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) result += str[i]
  }
  return result
}
console.log(a.length)
for (let i = 0; i < a.length; i++) console.log(a[i])
console.log(removeRepeatChar(str))
