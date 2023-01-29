
function multiTable(number) {
    let res = ''
    let count = 0
    for (let i = 1; i <=10; i++){
      count = i * `${number}`
      res += `${i} * ${number} = ${count}\n`
    }
    res = res.split('')
    abc = res.splice(res.length - 1, 1)
    res = res.join('')
    return res
  }
