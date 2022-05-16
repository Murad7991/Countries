

const fetchAzerbaijanCities = async () => {
    let newArr = []
    const response = await fetch('https://taskwork-5460b-default-rtdb.firebaseio.com/azerbaijan3.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}

const firstCountry = document.querySelector('#azerb')
const subcity1 = document.querySelector('.sub-cities-azerb')

firstCountry.addEventListener('click', () =>{
    subcity1.style.display = 'block'
    fetchAzerbaijanCities().then(res => {
        res.map(data => {
            subcity1.innerHTML += `<li>${data.city.name}
            </li>`
        })
    })
})


const secondCountry = document.querySelector('#turkey')
const subcity2 = document.querySelector('.sub-cities-turk')

const fetchTurkeyCities = async () => {
    let newArr = []
    const response = await fetch('https://taskwork-5460b-default-rtdb.firebaseio.com/turkey3.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}

secondCountry.addEventListener('click', () =>{
    subcity2.style.display = 'block'
    fetchTurkeyCities().then(res => {
        res.map(data => {
            subcity2.innerHTML += `<li style="background-color: #c83737">${data.city.name}
            </li>`
        })
    })
})



const thirdCountry = document.querySelector('#ukraine')
const subcity3 = document.querySelector('.sub-cities-ukr')

const fetchUkraineCities = async () => {
    let newArr = []
    const response = await fetch('https://taskwork-5460b-default-rtdb.firebaseio.com/ukraine3.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}

thirdCountry.addEventListener('click', () =>{
    subcity3.style.display = 'block'
    fetchUkraineCities().then(res => {
        res.map(data => {
            subcity3.innerHTML += `<li style="background-color: #85852e">${data.city.name}
            </li>`
        })
    })
})
