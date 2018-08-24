export const peopleDataCleaner = data => {
  const PersonData = data.results.map(async personData => {
    const homeworld = await fetchData(personData.homeworld);
    const species = await fetchData(personData.species[0]);
    let population = parseInt(homeworld.population, 10).toLocaleString('en');
    if (population == 'NaN') {
      population = 'Unknown';
    }
    return {
      name: personData.name,
      Homeworld: homeworld.name,
      Species: species.name,
      Population: population
    };
  });
  return Promise.all(PersonData);
};

const getResidents = async data => {
  const residents = data.residents.map(async resident => {
    const residentName = await fetchData(resident);
    return residentName.name;
  });
  return Promise.all(residents);
};

export const planetDataCleaner = data => {
  const PlanetData = data.results.map(async data => {
    const residents = await getResidents(data);
    let population = parseInt(data.population, 10).toLocaleString('en');
    if (population == 'NaN') {
      population = 'Unknown';
    }
    return {
      name: data.name,
      Terrain: data.terrain,
      Population: population,
      Climate: data.climate,
      Residents: residents
    };
  });
  return Promise.all(PlanetData);
};

const fetchData = async url => {
  const response = await fetch(url);
  return await response.json();
};

export const vehicleDataCleaner = data => {
  const vehicleData = data.results.map(result => {
    return {
      name: result.name,
      Model: result.model,
      Class: result.vehicle_class,
      'Number of Passengers': result.passengers
    };
  });
  return Promise.all(vehicleData);
};
