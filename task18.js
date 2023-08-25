function hasSumOfTwo(arr1, arr2, targetSum) {
    const set = new Set(arr1);
    for (const num of arr2) {
      const diff = targetSum - num;
      if (set.has(diff)) {
        return true;
      }
    }
    return false;
  }
  const arr1 = [1, 4, 6, 8];
  const arr2 = [3, 7, 2, 9];
  const targetSum = 13;
  console.log(hasSumOfTwo(arr1, arr2, targetSum)); 
  