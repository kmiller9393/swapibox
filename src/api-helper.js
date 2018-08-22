// import { peopleDataCleaner, getPeopleData } from './helper';

const peopleUrl = `https://swapi.co/api/people/`;

export const peopleDataFetcher = async () => {
    // let array = []
    let response = await fetch(peopleUrl);
    let data = await response.json();
    // i want to create an object for each person and their data and i want to push it into an array and return it, so i should use a method from the helper file to clean out the data

    let bar = await peopleDataCleaner(data)

    // let bar = await getPeopleData(data)

    console.log(bar)
    return data;
  }

  // export const dataFetcher = async (url) => {
  //   console.log(url)
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console.log(data)
  //   return data
  // }

  const peopleDataCleaner = (data) => {
    // let array = []
  let foo = data.results.map(async personData => {
    let results = {};
    let homeworld = await fetchData(personData.homeworld);
    let species = await fetchData(personData.species[0]);

    results.name = personData.name;
    results.homeworld = homeworld.name
    results.species = species.name
    results.population = homeworld.population
    // results.language = personData.language
  return results
  });
  
  return Promise.all(foo)
  }
  
  
  
  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }