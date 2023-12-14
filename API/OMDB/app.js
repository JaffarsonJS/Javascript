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
        <h1>${Title}</h1>
        <img src=${Poster==="N/A"?"https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg":Poster} width="200px">
        <h2>${Year}</h2>

        `
        // <img src=${Poster} width="200px">       
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
