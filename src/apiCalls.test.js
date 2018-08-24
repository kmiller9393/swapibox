import {
  peopleDataFetcher,
  planetDataFetcher,
  vehicleDataFetcher
} from './apiCalls';
// import { peopleDataCleaner } from './api-helper';

describe('peopleDataFetcher method', () => {
  let mockEndpoint;
  let mockPeopleCleaner;
  let mockData

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            {
              results: {
                homeworld: 'Tatooine',
                species: ['Human']
              }
            }
          ])
      });
    });
  });

  it.skip('should call fetch with the correct parameters', () => {
    mockEndpoint = 'vehicles';
    peopleDataFetcher(mockEndpoint)
    expect(window.fetch).toHaveBeenCalledWith(
      `https://swapi.co/api/${mockEndpoint}/`
    );
  });
  
  it.skip('should call the peopleDataCleaner method with the correct params', () => {
    peopleDataFetcher(mockEndpoint)
    expect(peopleCleaner).toHaveBeenCalledWith(mockEndpoint)
  });


});

