
function signin(e){
    // e.preventDefault();
    let signInemail = document.getElementById("signInemail").value;
    let signInpassword = document.getElementById("signInpassword").value;
    let form = document.getElementById("frm")

    let usr_info = []
    usr_info = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    //^ Validating
    if(signInemail==="" || signInpassword===""){
        alert("Please fill all the fields")
        return false
    }
    else if(signInemail.includes("@")===false){
        alert("Please enter a valid email")
        return false
    }
    else if(signInpassword.length<6){
        alert("Password must be at least 6 characters long")
        return false
    }
    else if(signInemail.length<3){
        alert("Name must be at least 3 characters long")
        return false
    }

    console.log(usr_info)

    if (usr_info.some((ele)=>{  return ele.email===signInemail && ele.password===signInpassword }))
    {
        alert("login success")
        
        let curnt_usr = usr_info.filter((ele)=>{
            return ele.email===signInemail && ele.password===signInpassword
        })[0]
        
        localStorage.setItem("nameValue",curnt_usr.name)
        // localStorage.setItem("emailValue",curnt_usr.email)
        form.action="./movie.html"
        // window.location.href="./movie.html"
    }
    else{
        alert("login failed")
    }


}