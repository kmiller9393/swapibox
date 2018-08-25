import {
  peopleDataCleaner,
  planetDataCleaner,
  vehicleDataCleaner
} from './api-helper';

// import { peopleCleaner } from './services/peopleCleaner'

export const peopleDataFetcher = async endpoint => {
  let response = await fetch(`https://swapi.co/api/${endpoint}/`);
  let data = await response.json();
  console.log(data)
  const results = peopleCleaner(data);
  console.log(results)
  return results
}

const peopleCleaner = async data => {
  let results = await peopleDataCleaner(data);
  return results;
};

export const planetDataFetcher = async endpoint => {
  let response = await fetch(`https://swapi.co/api/${endpoint}/`);
  let data = await response.json();
  return planetCleaner(data)
}

const planetCleaner = async data => {
  let results = await planetDataCleaner(data);
  return results;
};

export const vehicleDataFetcher = async endpoint => {
  let response = await fetch(`https://swapi.co/api/${endpoint}/`);
  let data = await response.json();
  return vehicleCleaner(data)
}

const vehicleCleaner = async data => {
  let results = await vehicleDataCleaner(data);
  return results;
};
