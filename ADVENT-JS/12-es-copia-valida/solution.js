function checkIsValidCopy(original, copy) {
    const objMap = {
      '#': ['+',':','.',' '],
      '+': [':','.',' '],
      ':': ['.',' '],
      '.': [' '],
      ' ': []
    }
  
    let valid = true
    original.split('').find((ogChar, i) => {
      const a = ogChar.toLowerCase()
      const b = objMap[ogChar] || ['#','+',':','.',' ']
      valid = ogChar !== copy.at(i)
      valid = valid && a !== copy.at(i)
      valid = valid && !b.includes(copy.at(i))
      return valid
    })
    return !valid
  }
  