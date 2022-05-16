

// Create Citu

let but = document.querySelector('#but')

but.addEventListener('click', () => {
    const cityName = document.querySelector('#cityName').value
    let countries = document.querySelector('#countries')
    const city = {
        name: cityName,
        id: Date.now(),
        country: countries.value
    }
    switch (countries.value) {
        case 'Azerbaijan':
            axios.post('https://taskwork-5460b-default-rtdb.firebaseio.com/azerbaijan3.json', {city})
                .then(() => {
                    // Swal.fire(
                    //     'Good job!',
                    //     'City Added'
                    // )
                });
            break;
        case 'Turkey':
            axios.post('https://taskwork-5460b-default-rtdb.firebaseio.com/turkey3.json', {city})
                .then(response => {
                    console.log(response)
                });
            break;
        case 'Ukraine':
            axios.post('https://taskwork-5460b-default-rtdb.firebaseio.com/ukraine3.json', {city})
                .then(response => {
                    console.log(response)
                });
            break;
}})

