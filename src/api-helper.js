export const peopleDataCleaner = data => {
  const PersonData = data.results.map(async personData => {
    const response = await fetch(personData.homeworld);
    const homeworld = await response.json();

    const speciesResponse = await fetch(personData.species[0]);
    const species = await speciesResponse.json();

    let population = parseInt(homeworld.population, 10).toLocaleString('en');
    if (population === 'NaN') {
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
    const response = await fetch(resident);
    const residentName = await response.json();
    return residentName.name;
  });
  return Promise.all(residents);
};

export const planetDataCleaner = data => {
  const PlanetData = data.results.map(async data => {
    let residents = await getResidents(data);
    let population = parseInt(data.population, 10).toLocaleString('en');
    if (population === 'NaN') {
      population = 'Unknown';
    }
    residents = residents.join(', ');
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
