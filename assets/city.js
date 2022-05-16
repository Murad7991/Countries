const forEdit = document.querySelector('.forEdit')


let someArray4 = []
let cityAzerb = []
let azerbaijanCities = axios.get('https://taskwork-5460b-default-rtdb.firebaseio.com/azerbaijan3.json').then(res => {
    someArray4.push(res.data)
    for (let i = 0; i < someArray4.length; i++) {
        cityAzerb = Object.entries(someArray4[i])
        return cityAzerb
    }
})

const id = window.location.search.slice(4,50)
console.log(id)

azerbaijanCities.then(res => {
    const newRes = res.filter(item => item[0] == id)
    newRes.map(data => {
        forEdit.innerHTML = `
                <h3>Country : ${data[1].city.country}</h3>
                <input id="az" type="text" value="${data[1].city.name}"/>
                <input type="submit" id="update" value="Update">`
    })
    document.querySelector('#update').addEventListener('click', () => {
        const yeniInp = document.querySelector('#az').value
        const city = {
            name: yeniInp,
        }
        axios.patch(`https://taskwork-5460b-default-rtdb.firebaseio.com/azerbaijan3/${id}.json`, {city})
            .then(() => {
                window.location.reload()
            })
    })
})


let someArray5 = []
let cityTurok = []
let turkeanCities = axios.get('https://taskwork-5460b-default-rtdb.firebaseio.com/turkey3.json').then(res => {
    someArray5.push(res.data)
    for (let i = 0; i < someArray5.length; i++) {
        cityTurok = Object.entries(someArray5[i])
        return cityTurok
    }
})




turkeanCities.then(res => {
    const newRes = res.filter(item => item[0] == id)
    newRes.map(data => {
        forEdit.innerHTML = `
                <h3>Country : ${data[1].city.country}</h3>
                <input id="az" type="text" value="${data[1].city.name}"/>
                <input type="submit" id="update" value="Update">`
    })
    document.querySelector('#update').addEventListener('click', () => {
        const yeniInp = document.querySelector('#az').value
        const city = {
            name: yeniInp,
        }
        axios.patch(`https://taskwork-5460b-default-rtdb.firebaseio.com/turkey3/${id}.json`, {city})
            .then(() => {
                window.location.reload()
            })
    })
})


let someArray6 = []
let cityUkr = []
let ukrainianCities = axios.get('https://taskwork-5460b-default-rtdb.firebaseio.com/ukraine3.json').then(res => {
    someArray6.push(res.data)
    for (let i = 0; i < someArray6.length; i++) {
        cityUkr = Object.entries(someArray6[i])
        return cityUkr
    }
})




ukrainianCities.then(res => {
    const newRes = res.filter(item => item[0] == id)
    newRes.map(data => {
        forEdit.innerHTML = `
                <h3>Country : ${data[1].city.country}</h3>
                <input id="az" type="text" value="${data[1].city.name}"/>
                <input type="submit" id="update" value="Update">`
    })
    document.querySelector('#update').addEventListener('click', () => {
        const yeniInp = document.querySelector('#az').value
        const city = {
            name: yeniInp,
        }
        axios.patch(`https://taskwork-5460b-default-rtdb.firebaseio.com/ukraine3/${id}.json`, {city})
            .then(() => {
                window.location.reload()
            })
    })
})
