function binarySearch(ary,target)
{
    let left = 0
    let right = ary.length-1

    while(left<=right)
    {
        let middle = Math.floor((left+right)/2)

        if(target===ary[middle]){
            return middle
        }
        if(target<ary[middle]){
            right = middle - 1
        }
        else{
            left = middle + 1
        }
    }
    return -1
}

console.log(binarySearch( [1,2,3,4,5,6,7,8,9] , 8))

// console.log(binarySearch([-5,2,4,6,10],10))