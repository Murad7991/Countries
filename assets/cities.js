const cityAzerb = document.querySelector('.cities .azerb')
const cityTurk = document.querySelector('.cities .turkey')
const cityUkr = document.querySelector('.cities .ukraine')
setTimeout(() => {
    if (location.reload()) {
        return false;
    }
}, 3000)


//AzerbaijanCities Fetch and Delete

let someArray3 = []
let citiesAzerb = []
let azerbaijanCities = axios.get('https://taskwork-5460b-default-rtdb.firebaseio.com/azerbaijan3.json').then(res => {
    someArray3.push(res.data)
    for (let i = 0; i < someArray3.length; i++) {
        citiesAzerb = Object.entries(someArray3[i])
        return citiesAzerb
    }
})

azerbaijanCities.then(res => {
    let citiesAz = []
    res.map(data => {
        cityAzerb.innerHTML += `<li>${data[1].city.name}
                <div class="addDelete">
                    <a href="./city.html?id=${data[0]}"><i class="fa-solid fa-pen"></i></a>
                    <i id="${data[0]}"  class="fa-solid fa-trash deleteCity"></i>
                </div>
            </li>`
    })
    let deleteCity = document.querySelectorAll('.deleteCity')
    citiesAz = Array.from(deleteCity)
    for (let i = 0; i < citiesAz.length; i++) {
        citiesAz[i].addEventListener('click', (e) => {
            axios.delete(`https://taskwork-5460b-default-rtdb.firebaseio.com/azerbaijan3/${e.target.id}.json`)
                .then(() => {
                    window.location.reload()
                })
        })
    }
})


//Ukraine Cities Fetch and Delete

let someArray2 = []
let citiesUkr= []
let ukraineCities = axios.get('https://taskwork-5460b-default-rtdb.firebaseio.com/ukraine3.json').then(res => {
    someArray2.push(res.data)
    for (let i = 0; i < someArray2.length; i++) {
        citiesUkr = Object.entries(someArray2[i])
        return citiesUkr
    }
})

ukraineCities.then(res => {
    let citiesUk = []
    res.map(data => {
        cityUkr.innerHTML += `<li>${data[1].city.name}
                <div class="addDelete">
                    <a href="./city.html?id=${data[0]}"><i class="fa-solid fa-pen"></i></a>
                    <i id="${data[0]}"  class="fa-solid fa-trash deleteCity"></i>
                </div>
            </li>`
    })
    let deleteCity = document.querySelectorAll('.deleteCity')
    citiesUk = Array.from(deleteCity)
    for (let i = 0; i < citiesUk.length; i++) {
        citiesUk[i].addEventListener('click', (e) => {
            axios.delete(`https://taskwork-5460b-default-rtdb.firebaseio.com/ukraine3/${e.target.id}.json`)
                .then(() => {
                    window.location.reload()
                })
        })
    }
})

//TurkeyCities Fetch and Delete

let someArray = []
let citiesTurk = []
let turkeyCities = axios.get('https://taskwork-5460b-default-rtdb.firebaseio.com/turkey3.json').then(res => {
    someArray.push(res.data)
    for (let i = 0; i < someArray.length; i++) {
        citiesTurk = Object.entries(someArray[i])
        return citiesTurk
    }
})

turkeyCities.then(res => {
    let citiesTr = []
    res.map(data => {
        cityTurk.innerHTML += `<li>${data[1].city.name}
                <div class="addDelete">
                    <a href="./city.html?id=${data[0]}"><i class="fa-solid fa-pen"></i></a>
                    <i id="${data[0]}"  class="fa-solid fa-trash deleteCity"></i>
                </div>
            </li>`
    })
    let deleteCity = document.querySelectorAll('.deleteCity')
    citiesTr = Array.from(deleteCity)
    for (let i = 0; i < citiesTr.length; i++) {
        citiesTr[i].addEventListener('click', (e) => {
            axios.delete(`https://taskwork-5460b-default-rtdb.firebaseio.com/turkey3/${e.target.id}.json`)
                .then(() => {
                    window.location.reload()
                })
        })
    }
})
