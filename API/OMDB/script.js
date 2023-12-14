
function getMovies(){
    let value = document.getElementById("search").value
    let section = document.getElementById("section")
    let movie = fetch(`http://www.omdbapi.com/?s=${value}&apikey=8af6333a`)

    console.log(movie);
    movie.then(data=>{
        console.log(data);
        return data.json()
    }).then(d=>{
        console.log(d)
        console.log(d.Search);
        section.innerHTML=""
        d.Search.map(({Title,Year,Poster})=>{
             section.innerHTML+=
            `
            <h1>${Title}</h1>
            <h1>${Year}</h1>
            <img src=${Poster} id="pstrImg">
            `
        })
        let pstrImage = document.getElementById("pstrImg")
        pstrImage.addEventListener(click,)
    })
}
