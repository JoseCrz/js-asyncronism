const fetchData = require('./fetchData')
const getRickAndMortyCharacter = (characterNumber = 1) => {
    const charUrl = `https://rickandmortyapi.com/api/character/${characterNumber}/`
    fetchData(charUrl)
    .then(character => {
        console.log(`[${character.species}] ${character.name}`)
        if (character.origin.url) {
            const locationUrl = character.origin.url
            return fetchData(locationUrl)
        }
        return null
    })
    .then(location => {
        if (location) {
            console.log(`Lives in ${location.type} ${location.name} from ${location.dimension}`)
        } else {
            console.log(`- Unknown Location`)
        }
    })
    .catch(error => {
        console.log(error)
    })

}
// Rick Sanchez 
getRickAndMortyCharacter(1)
// Morty Smith
// getRickAndMortyCharacter(2)
// Bubonic Plague
// getRickAndMortyCharacter(100)