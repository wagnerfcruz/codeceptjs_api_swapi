//https://swapi.dev/documentation#start //documentação da API

var axios = require('axios')
const env = require('../config')


async function getTestSwapiRoot() {
  return await axios.get(`https://swapi.dev/api/`, {
    'Content-Type': 'application/json'})

}
async function getTestPlanets() {
    return await axios.get(`https://swapi.dev/api/planets/1/`, {
      'Content-Type': 'application/json'})
  
}

async function getTestPeople() {
    return await axios.get(`https://swapi.dev/api/people/1/`, {
      'Content-Type': 'application/json'})
  
}



module.exports = {getTestPlanets, getTestPeople, getTestSwapiRoot}