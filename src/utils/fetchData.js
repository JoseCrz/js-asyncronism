const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const fetchData = (url = 'https://rickandmortyapi.com/api/character/1/') => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', url, true)
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error ('Error with', url))
            }
        }
        xhttp.send()
    })
}

module.exports = fetchData