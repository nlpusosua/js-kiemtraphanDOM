function getStringHasMaxLength(strings) {
    let maxLength = 0;
    let longestStrings = [];
  
    for (let i = 0; i < strings.length; i++) {
      const currentLength = strings[i].length;
  
      if (currentLength > maxLength) {
        maxLength = currentLength;
        longestStrings = [strings[i]];
      } else if (currentLength === maxLength) {
        longestStrings.push(strings[i]);
      }
    }
  
    return longestStrings;
  }
  
  // Ví dụ sử dụng:
  const strings = ['aba', 'aa', 'ad', 'c', 'vcd'];
  const result = getStringHasMaxLength(strings);
  console.log(result); 