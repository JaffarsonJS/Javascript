//^ i  --->  case insensitive first match
//! g  --->  case sensitive all match
//& gi --->  case insensitive all match


// console.log(/^[A-Za-z]+$/.test("4567890"))

function sub(e){
    e.preventDefault()
    let fn = document.getElementById("fn").value
    let ln = document.getElementById("ln").value
    let us = document.getElementById("us").value
    let mail = document.getElementById("mail").value
    let pass = document.getElementById("pass").value

    let err = document.getElementById("err")

    if(fn==="" && ln==="" && us==="" && mail==="" && pass===""){
        err.style.display="block"
        err.innerText="Don't leave empty"
        return false
    }
    else if(
    (fn.length<4 || fn.length>30) ||
    (ln.length<4 || ln.length>30) || 
    (us.length<4 || us.length>30)
    )
    {
        err.style.display="block"
        err.innerText="Characters must be greater than 4 and under 30 charcters only"
        return false
    }
    else if(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(mail)
    )
    {
        err.style.display="block"
        err.innerText="Email should be correct"
        return false    
    }
    // else if((pass.length>10 || pass.length<10)){
    //     err.style.display="block"
    //     err.innerText="Password length should be 10"
    //     return false    
    // }
    else if(!/^[A-Za-z]+$/.test(fn)){
        err.style.display="block"
        err.innerText="Don't use numbers in First Name"
        return false
    }
    else{
        err.style.display="none"
        return false
    }
}




















//     console.log("JaffArson".match(/[A-Z]/));
//     console.log("JaffArson".match(/[A-Z]/i));
//     console.log("JaffArson".match(/[A-Z]/g));
//     console.log("JaffArson".match(/[A-Z]/gi));




// console.log(/[a-z]/g.test("Jaffarson")); //! regExpressionObject.test(value)  ==> return boolean


// var passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 

