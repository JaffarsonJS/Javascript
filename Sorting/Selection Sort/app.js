// function selectionSort(inputArr) { 
//     let n = inputArr.length;
        
//     for(let i = 0; i < n; i++) {
//         // Finding the smallest number in the subarray
//         let min = i;
        

//         for(let j = i+1; j < n; j++){
//             if(inputArr[j] < inputArr[min]) {
//                 min=j; 
//             }
//          }
//          if (min != i) {

//             console.log(min != i)
            
//              // Swapping the elements
//              let tmp = inputArr[i]; 
//              inputArr[i] = inputArr[min];
//              inputArr[min] = tmp;      
//         }
//     }
//     return inputArr;
// }

// let ary = [10,2,34,5,22,0]
// console.log(selectionSort(ary))


function sort(ary)
{
    for (let i=0; i<ary.length; i++)
    {
        for (let j=i; j<ary.length; j++)
        {
            if(ary[i]>ary[j+1])
            {
                // let temp = ary[i]
                // ary[i] = ary[j+1]
                // ary[j+1] = temp
                [ary[i],ary[j+1]] = [ary[j+1],ary[i]]
            }
        }
    }
return ary
}
let ary = [10,2,34,5,22,0]
console.log(sort(ary))