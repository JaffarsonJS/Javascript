// //! Insertion sort 
// function insertionSort(arr, n) 
// { 
// 	let i, key, j; 
// 	for (i = 0; i < n; i++) 
// 	{ 
// 		key = arr[i]; 
// 		j = i - 1; 
// 		while (j >= 0 && arr[j] > key) 
// 		{ 
// 			arr[j + 1] = arr[j]; 
// 			j = j - 1; 
// 		} 
// 		arr[j + 1] = key; 
// 	} 
// } 
// function printArray(arr, n) 
// { 
// 	let i; 
// 	for (i = 0; i < n; i++) 
// 		console.log(arr[i] + " ")
// } 
// // Driver code 
// 	let arr = [12, 11, 13, 5, 6 ]; 
// 	let n = arr.length; 
// 	insertionSort(arr, n); 
// 	printArray(arr, n); 










let arr = [4,2,4,74,21,1]

for(let i=1; i<arr.length; i++)
{
	for(let j=i; j>0 && arr[j]<arr[j-1]; j--)
	{
		// [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
		// let temp = arr[j]
        // arr[j] = arr[j-1]
        // arr[j-1] = temp
		[arr[j], arr[j-1]] = [arr[j-1],arr[j]]
	}
}
console.log(arr)