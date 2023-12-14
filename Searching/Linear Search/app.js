function linearSearch(ary,target){
    for(let i=0;i<ary.length-1;i++){
        for(let j=i+1;j<ary.length-1;j++){
            if(ary[i]===ary[j]){
                console.log("You found it in "+ i)
            }
            else {
                console.log("Cant find")
            }
        }
    }
}


console.log(linearSearch([1,2,3,4,5,6,7],4))