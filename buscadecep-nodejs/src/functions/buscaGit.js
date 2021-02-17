const fetch = require('node-fetch')

module.exports = async function buscaPeople(login){
const response = await fetch(`https://api.github.com/users/${login}`)
    const json = await response.json()

    return json
}