const quickSort = (arr) => 
{
    if (arr.length <= 1) 
    {
      return arr;
    }
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];
    for (let i = 1; i < arr.length; i++) 
    {
      if (arr[i] < pivot) 
      {
        leftArr.push(arr[i]);
        // leftArr += arr[i]
      }
      else 
      {
        rightArr.push(arr[i]);
        // rightArr += arr[i]
      }
    }
    return [...quickSort((Array.from(leftArr))), pivot, ...quickSort(Array.from(rightArr))];
};

console.log(quickSort([1,9,3,1,7,22]))