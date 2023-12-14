// //! Bubble sort w/o optimization
// var arr = [234, 43, 55, 63, 5, 6, 0.4, -1]; 

// 	for (var i = 0; i < arr.length; i++) 
//     {
// 		for (var j = 0; j < (arr.length - i - 1); j++)
//         {
//         //     console.log(arr.length - i - 1)

//         //     console.log(arr[j])
//         //    console.log(arr[j+1])
            
// 			if (arr[j] > arr[j + 1]) 
//             {
//                 // console.log(`arr[${j}] > arr[${j} + 1]`,arr[j] > arr[j + 1])
// 				var temp = arr[j]
//                 arr[j] = arr[j + 1]
// 				arr[j + 1] = temp 

// 			}
// 		}
// 	}
// console.log(arr);



// let a = arr

// let a = [...arr]

// a.push(11111)
// arr.push(222222)
// console.log(a)
// console.log(arr)

        











//! Optimized implementation of bubble sort Algorithm 

var arr = [243, 45, 23, 356, 3, 5346, 35, 5]; 
	var i, j; 
	var len = arr.length; 
	var isSwapped = false; 

	for (i = 0; i < len; i++) 
    { 
		isSwapped = false; 
		for (j = 0; j < len; j++) 
        { 
			if (arr[j] > arr[j + 1]) 
            { 
				var temp = arr[j] 
				arr[j] = arr[j + 1]; 
				arr[j + 1] = temp; 
				isSwapped = true; 
			} 
		}
		if (!isSwapped) 
        { 
			break; 
		} 
	} 
	console.log(arr) 