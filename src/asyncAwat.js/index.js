const fetchData = require('../utils/fetchData')

const getRickAndMortyCharacter = async (characterNumber = 1) => {
    const charUrl = `https://rickandmortyapi.com/api/character/${characterNumber}/`
    try {
        const character = await fetchData(charUrl)
        console.log(character.name)
        
        if(character.origin.url) {
            const locationUrl = character.origin.url
            location = await fetchData(locationUrl)
            console.log(`Lives in ${location.type} ${location.name} from ${location.dimension}`)
        }
    } catch {
        console.log(error)
    }
}

getRickAndMortyCharacter(1)