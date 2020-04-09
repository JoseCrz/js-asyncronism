const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const URL = 'https://rickandmortyapi.com/api/character'

const fetchData = (apiUrl, callback) => {    
    let xhr = new XMLHttpRequest()
    
    xhr.open('GET', apiUrl, true)

    xhr.onreadystatechange = event => {
        if(xhr.readyState === 4) {
            console.log("fetchData -> xhr.status", xhr.status)
            if(xhr.status === 0) {

                console.log("fetchData -> xhr.responseText", xhr.responseText)
                callback(null, JSON.parse(xhr.responseText))
            } else {
               const error = new Error(`[Error] ${apiUrl}`)
               return callback(error, null) 
            }
        }
    }
    xhr.send()
}

fetchData(URL, (error, data) => {
    if (error) return console.error(error)
    console.log(data)
})