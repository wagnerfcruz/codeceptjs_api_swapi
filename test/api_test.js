
const chai = require("chai")
const expect = chai.expect;
const {getTestPlanets, getTestPeople, getTestSwapiRoot} = require('../api/request_swapi')

const assertArrays = require('chai-arrays');
chai.use(assertArrays);

Feature('The Star Wars API');

Scenario('Retorno 200 - Sucesso @sucess', async () => {
    const TestSwapiRoot = await getTestSwapiRoot(hash)
    expect(TestSwapiRoot.status).to.equal(200)
  })
  
Scenario('Retorno do Planeta @planets', async () => {
    const swapiplanet = await getTestPlanets()
    console.log(swapiplanet.data)
  })

  Scenario('Validar Nome do Planeta @nameplanet', async () => {
    const  swapiplanet = await getTestPlanets()
    expect(swapiplanet.data.name).to.equal('Tatooine')
  })
  
  Scenario('Validar Populacao Planeta @populationplanet', async () => {
    const swapiplanet = await getTestPlanets()
    expect(swapiplanet.data.population).to.equal('200000')
  })
  
  Scenario('Retorno da Pessoa 1 @people', async () => {
    const swapipeople = await getTestPeople()
    console.log(swapipeople.data)
  })
  
  Scenario('Validar Nome da Pessoa @namepeople', async () => {
    const  swapipeople = await getTestPeople()
    expect(swapipeople.data.name).to.equal('Luke Skywalker')
  })
  
  Scenario('Validar Cor do Olho da Pessoa @eyecolor', async () => {
    const swapipeople = await getTestPeople()
    expect(swapipeople.data.eye_color).to.equal('blue')
  })