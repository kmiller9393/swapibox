import {
  peopleDataFetcher,
  planetDataFetcher,
  vehicleDataFetcher
} from './apiCalls';

describe('peopleDataFetcher method', () => {
  let mockEndpoint;
  let mockPeopleDataCleaner;

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

    mockPeopleDataCleaner = jest.fn();
  });

  it('should call fetch with the correct parameters', () => {
    mockEndpoint = 'vehicles';
    expect(window.fetch).toHaveBeenCalledWith(
      `https://swapi.co/api/${mockEndpoint}/`
    );
  });

  it('should call the peopleDataCleaner method with the correct params', () => {});
});
