console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {

    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(resp => resp.json())
        .then(json => getImage(json));

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(json => getBreed(json));

    })
function getImage(link) {
        link.message.forEach(function(item) {
        let dogPic = document.createElement("img")
        dogPic.src = item
        document.getElementById("dog-image-container").appendChild(dogPic)
    })
}

function getBreed(link) {
    const ul = document.getElementById('dog-breeds')
    myBreeds = link.message
    for(const breed in myBreeds) {
        const li = document.createElement("li")
        li.addEventListener("click", function(event) {
            event.target.style.color = "red"
        })
        ul.appendChild(li)
        li.innerText = breed
        li.className = "breeds-list-item"
        
    }
        
}

function getBreedFromFilter(filter) {
    const ul = document.getElementById('dog-breeds')
    ul.innerHTML=""
    myBreeds = filter
    for(const breed of myBreeds) {
        const li = document.createElement("li")
        li.addEventListener("click", function(event) {
            event.target.style.color = "red"
        })
        ul.appendChild(li)
        li.innerText = breed
        li.className = "breeds-list-item"
    }
}

function filterBreeds() {
    let letter = document.getElementById("breed-dropdown").value
    let list = document.getElementsByClassName("breeds-list-item")
    let filteredList = []
    for(let sortedBreeds of list) {
        if (sortedBreeds.innerText.startsWith(`${letter}`)) {
             filteredList.push(sortedBreeds.innerText)
        }
        
    }
    console.log(filteredList)
    getBreedFromFilter(filteredList)
}

        
    
