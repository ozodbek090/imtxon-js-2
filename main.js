const searchInput = document.querySelector("#search")
const pokeSelect = document.querySelector(".select")
const pokeList = document.querySelector(".ota")
const serchBtn = document.querySelector("#button")



function renderPokemon(mulfilm){
pokeList.innerHTML = "";

if(mulfilm.length === 0){
    pokeList.className = "topilmadi"
    pokeList.innerHTML = "Filim topilmadi"
}


mulfilm.forEach(obyeklar => {
    const li = document.createElement("li")
    li.innerHTML += 
    
    `
    <div class="item">
       <img src="obyeklar${obyeklar.ImageURL}">
         <h2>${obyeklar.Title}</h2>
       <div class="div__text">
            <h2 class="tixt">${obyeklar.imdb_rating}</h2>
            <h2 class="tixt">${obyeklar.movie_year}</h2>
            </div>
            <h2 class="tilip">${obyeklar.Categories}</h2>
            <button class="but">More info</button>
    </div>

    `
    pokeList.appendChild(li)


    
    
});



}


renderPokemon(movies)





serchBtn.addEventListener("click" , (e) => {
    e.preventDefault()
    const inputQimati = searchInput.value.toLowerCase();

    const filterLanganlar = movies.filter(item => {
        return item.fulltitle.toLowerCase().includes(inputQimati)
    })

    

        renderPokemon(filterLanganlar)
    
            

})





function sortirovka(obj, qiymat) {
    if(qiymat === "A-Z"){
        return obj.sort((a, b) => a.fulltitle.localeCompare(b.fulltitle));
    }else if (qiymat === "Z-A"){
        return obj.sort((a, b) => b.fulltitle.localeCompare(a.fulltitle));
    }
    return obj;
}




pokeSelect.addEventListener("change", () => {
    const val = pokeSelect.value;

    let sortedPokemons;


    if(val === "A-Z" || val === "Z-A"){
        sortedPokemons = sortirovka(movies, val)
    }else{
        sortedPokemons = movies;
    }


    renderPokemon(sortedPokemons)
})