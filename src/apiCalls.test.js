import {
  peopleDataFetcher,
  planetDataFetcher,
  vehicleDataFetcher
} from './apiCalls';

import {
  mockPlanetData,
  mockPlanetResults,
  mockVehicleData,
  mockVehicleResults
} from './mockData';

describe('peopleDataFetcher method', () => {
  let mockEndpoint = 'people';

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            hair_color: 'blond',
            skin_color: 'fair',
            results: [
              {
                homeworld: 'Earth',
                population: 100000000000,
                species: [{}]
              }
            ]
          })
      });
    });
  });

  it('should call the peopleDataCleaner method with the correct params', async () => {
    await peopleDataFetcher(mockEndpoint);
    expect(window.fetch).toHaveBeenCalledWith(`https://swapi.co/api/people/`);
  });

  it('should call the peopleDataCleaner method with the correct params', async () => {
    let result = await peopleDataFetcher(mockEndpoint);
    expect(result).toEqual([
      {
        Homeworld: 'Luke Skywalker',
        Population: 'Unknown',
        Species: 'Luke Skywalker',
        name: undefined
      }
    ]);
  });
});

describe('planetDataFetcher method', () => {
  let mockEndpoint = 'planet';

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPlanetData)
      });
    });
  });

  it('should call the planetDataCleaner method with the correct params', async () => {
    await planetDataFetcher(mockEndpoint);
    expect(window.fetch).toHaveBeenCalledWith(`https://swapi.co/api/planet/`);
  });

  it('should call the peopleDataCleaner method with the correct params', async () => {
    let result = await planetDataFetcher(mockEndpoint);
    expect(result).toEqual(mockPlanetResults);
  });
});

describe('vehicleDataFetcher method', () => {
  let mockEndpoint = 'vehicle';

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockVehicleData)
      });
    });
  });

  it('should call the vehicleDataCleaner method with the correct params', async () => {
    await vehicleDataFetcher(mockEndpoint);
    expect(window.fetch).toHaveBeenCalledWith(`https://swapi.co/api/vehicle/`);
  });

  it('should call the vehicleDataCleaner method with the correct params', async () => {
    let result = await vehicleDataFetcher(mockEndpoint);
    expect(result).toEqual(mockVehicleResults);
  });
});
