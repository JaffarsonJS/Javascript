
let ls = ()=>{
    let such1 = document.getElementById("such1")
such1.innerHTML =
`
${localStorage.getItem("nameValue")}, you login Successfull
`
such1.style.cssText=
`
    margin-left: 33%;
    width: 37%;
    border-radius: 20px;
    background: #6060b0;
    padding:20px;
    margin-top:100px;
    display: flex;
    justify-content: center;
    align-items:center;
    font-weight: 100;
    color: white;
`
}
setTimeout(ls,0)






async function getMovies(){
    try{

    let section = document.getElementById("section")
    let input = document.getElementById("search")
    let value = input.value
    section.innerHTML=""

    let movie = await fetch(`http://www.omdbapi.com/?s=${value}&apikey=8af6333a`)
    movie = await movie.json()
    
    // console.log("movie",movie);
    // console.log(movie.Search);

    //! Backend Error
    // if(movie.Search===undefined){
    //     section.innerHTML = `<h1>${movie.Error}</h1>`
    //     return false
    // }


    movie.Search.map(({Title,Poster,Year})=>{
        section.innerHTML+=
        `
        <div class="card"> 
        <h1>${Title}</h1>
        <img src=${Poster==="N/A"?"https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg":Poster} width="200px">
        <h2>${Year}</h2>
        </div>
        `
        section.style.cssText+=
        `
        margin-top: 3rem;
        display: grid;
        // grid-template-columns: 1fr 1fr 1fr;
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        grid-template-columns: ;
        padding: 4rem;
        gap: 3rem;
        background: #ba5858;
    
        `     

        let card  = document.querySelectorAll(".card");
        console.log(value)

        card.className = "card"

        if(value==""){
            console.log(value=="")
            section.style.cssText+=
            `
            visibility:hidden;
            `
        }
    })
}
catch(err){
    //! Custom Error
    // console.log("error",err);
    console.log("EEERRRRRRRRRRRRR");
    // error TypeError: Cannot read properties of undefined (reading 'map')
    // at getMovies (app.js:11:18)
}



}
