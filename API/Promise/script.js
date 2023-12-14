async function asy(){
    let data = await fetch("https://api.github.com/users")
    console.log(data)
    let dat = await data.json()
    console.log(dat)

}

asy()
