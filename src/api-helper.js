const peopleUrl = `https://swapi.co/api/people/`;
const planetsUrl = `https://swapi.co/api/planets/`;
const vehiclesUrl = `https://swapi.co/api/vehicles/`;

export const peopleDataFetcher = async () => {
    let response = await fetch(peopleUrl);
    let data = await response.json();
    let results = await peopleDataCleaner(data)
    return results;
  }

  const peopleDataCleaner = (data) => {
  let unresolvedPersonData = data.results.map(async personData => {
    let results = {};
    let homeworld = await fetchData(personData.homeworld);
    let species = await fetchData(personData.species[0]);
    results.name = personData.name;
    results.homeworld = homeworld.name
    results.species = species.name
    results.population = homeworld.population
  return results
  });
  
  return Promise.all(unresolvedPersonData)
  }

  export const planetDataFetcher = async () => {
    let response = await fetch(planetsUrl);
    let data = await response.json();
    let results = await planetDataCleaner(data)
    return results;
  }

  const getResidents = async (data) => {
    const residents = data.residents.map(async (resident) => {
      let residentName = await fetchData(resident);
      return residentName.name
    })
    return Promise.all(residents)
  }

  const planetDataCleaner = (data) => {
    let unresolvedPlanetData = data.results.map(async (data) => {
      const residents = await getResidents(data)
      let results = {};
      results.name = data.name
      results.terrain = data.terrain
      results.population = data.population
      results.climate = data.climate
      results.residents = residents
    return results
  })
  return Promise.all(unresolvedPlanetData)
}

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  export const vehicleDataFetcher = async () => {
    let response = await fetch(vehiclesUrl);
    let data = await response.json();
    let results = await vehicleDataCleaner(data)
    // debugger
    // console.log(results)
    return results;
  }

  const vehicleDataCleaner = (data) => {
    
    let foo =  data.results.map(result => {

      
      let results = {};
      results.name = result.name;
      results.model = result.model;
      results.class = result.vehicle_class;
      results.numPassengers = result.passengers;
      console.log(results)
      return results
    })

    return Promise.all(foo)

  }


//   Name
// Model
// Class
// Number of Passengers