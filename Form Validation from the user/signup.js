function signup(e)
{
    // e.preventDefault(); 
    let nameValue = document.getElementById("name").value
    let emailValue = document.getElementById("email").value
    let phnoValue = document.getElementById("phno").value
    let passwordValue = document.getElementById("password").value

    let signUpBtn = document.getElementById("signUpBtn")

    let usr_info = []
    usr_info = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    console.log(usr_info)


    //^ Validating
    if(nameValue==="" || emailValue==="" || phnoValue==="" || passwordValue===""){
        alert("Please fill all the fields")
        return false
    }
    else if(emailValue.includes("@")===false){
        alert("Please enter a valid email")
        return false
    }
    else if(passwordValue.length<6){
        alert("Password must be at least 6 characters long")
        return false
    }
    else if(passwordValue.length>10){
        alert("Password must be at most 10 characters long")
        return false
    }
    else if(nameValue.length<3){
        alert("Name must be at least 3 characters long")
        return false
    }
    else if(nameValue.length>10){
        alert("Name must be at most 10 characters long")
        return false
    }
    else if(phnoValue.length<10){
        alert("Phone number must be at least 10 characters long")
        return false
    }










    //^ Storing
    //! This condition is going to check if the user is already there or not
    if (usr_info.some((ele)=>{  return ele.email===emailValue, ele.password===passwordValue, ele.name===nameValue, ele.phno===phnoValue}))
        {
        // console.log(ele.email===emailValue, ele.password===passwordValue, ele.name===nameValue, ele.phno===phnoValue)
        alert("already logged in")
    }

    //! if the user is not there is going to push into the array
    else{
        usr_info.push({
            "name": nameValue,
            "email": emailValue,
            "phno": phnoValue,
            "password": passwordValue
        })
        localStorage.setItem("users",JSON.stringify(usr_info))
    }
}