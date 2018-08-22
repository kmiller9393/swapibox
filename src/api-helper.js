export const peopleDataCleaner = data => {
  const PersonData = data.results.map(async personData => {
    const homeworld = await fetchData(personData.homeworld);
    const species = await fetchData(personData.species[0]);
    return {
      name: personData.name,
      homeworld: homeworld.name,
      species: species.name,
      population: homeworld.population
    };
  });
  return Promise.all(PersonData);
};

const getResidents = async data => {
  const residents = data.residents.map(async resident => {
    console.log(resident);
    const residentName = await fetchData(resident);
    return residentName.name;
  });
  return Promise.all(residents);
};

export const planetDataCleaner = data => {
  const PlanetData = data.results.map(async data => {
    const residents = await getResidents(data);
    return {
      name: data.name,
      terrain: data.terrain,
      population: data.population,
      climate: data.climate,
      residents
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
      modeul: result.model,
      class: result.vehicle_class,
      numPassengers: result.passengers
    };
  });
  return Promise.all(vehicleData);
};
