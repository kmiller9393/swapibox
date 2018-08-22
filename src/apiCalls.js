import {
  peopleDataCleaner,
  planetDataCleaner,
  vehicleDataCleaner
} from './api-helper';

export const peopleDataFetcher = async endpoint => {
  let response = await fetch(`https://swapi.co/api/${endpoint}/`);
  let data = await response.json();
  let results = await peopleDataCleaner(data);
  return results;
};

export const planetDataFetcher = async endpoint => {
  let response = await fetch(`https://swapi.co/api/${endpoint}/`);
  let data = await response.json();
  let results = await planetDataCleaner(data);
  return results;
};

export const vehicleDataFetcher = async endpoint => {
  let response = await fetch(`https://swapi.co/api/${endpoint}/`);
  let data = await response.json();
  let results = await vehicleDataCleaner(data);
  return results;
};
