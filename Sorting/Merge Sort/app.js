// function merge_Arrays(left_sub_array, right_sub_array) 
// {
//     let array = []
//     while (left_sub_array.length && right_sub_array.length) 
//     {
//         if (left_sub_array[0] < right_sub_array[0]) 
//         {
//             array.push(left_sub_array.shift())
//         } 
//         else 
//         {
//             array.push(right_sub_array.shift())
//         }
//     }
//     return [...array, ...left_sub_array, ...right_sub_array]
// }
// function merge_sort(unsorted_Array) 
// {
//     const middle_index = unsorted_Array.length / 2
//     if (unsorted_Array.length < 2) 
//     {
//         return unsorted_Array
//     }
//     const left_sub_array = unsorted_Array.splice(0, middle_index)
//     return merge_Arrays(merge_sort(left_sub_array), merge_sort(unsorted_Array))
// }
// let unsorted_Array = [39, 28, 44, 4, 10, 83, 11];
// console.log("The sorted array will be: ", merge_sort(unsorted_Array));



function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array becomes empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}


function mergeSort(array) 
{
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }


let  array = [4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(array));

