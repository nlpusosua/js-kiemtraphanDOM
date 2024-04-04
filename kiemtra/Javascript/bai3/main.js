function getCountElement(arr) {
    const countObj = {};
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (countObj[element]) {
        countObj[element] += 1;
      } else {
        countObj[element] = 1;
      }
    }
  
    return countObj;
  }
  
  // Ví dụ sử dụng:
  const arr = ["one", "two", "three", "one", "one", "three"];
  const result = getCountElement(arr);
  console.log(result);