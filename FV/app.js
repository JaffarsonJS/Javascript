function validator(e)
{
    e.preventDefault()

    let input = document.getElementById("enteredvalue")
    let enteredValue = input.value;
    console.log(enteredValue)

    let err = document.getElementById("err")
    // err.style.display="none";

    if(enteredValue==="")
    {
        err.style.display="block";
        err.innerText="Fullname is mandatory"
        return false
    }
    else if( !/^[A-Z]/.test(enteredValue) )
    {
        err.style.display="block";
        err.innerText="Write your fullname correctly"
        return false
    }
    else{
        // return false
    }

}



// /[pattern]/.test(string)

// console.log(/[A-Z]$/g  .test("SYED45"))







// str.match(pattern / i)

// console.log("syEd".match(/[A-Z]/))

// console.log("SyEd".match(/[A-Z]/g))

// console.log("SyEd".match(/[A-Z]/gi))

