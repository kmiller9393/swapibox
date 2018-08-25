import {
  peopleDataFetcher,
  peopleCleaner,
  planetDataFetcher,
  vehicleDataFetcher
} from './apiCalls';

describe('peopleDataFetcher method', () => {
  let mockEndpoint = 'people'
  let mockPeopleCleanerData;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", results: [{homeworld: "Earth", population: 100000000000,
          species:[{
          }]}]})
      });
    });
    });



  it('should call the peopleDataCleaner method with the correct params', async () => {
    await peopleDataFetcher(mockEndpoint)
    expect(window.fetch).toHaveBeenCalledWith(`https://swapi.co/api/people/`)
  });

  it('should call the peopleDataCleaner method with the correct params', async () => {
    let result = await peopleDataFetcher(mockEndpoint);
    expect(result).toEqual([{"Homeworld": "Luke Skywalker", "Population": "Unknown", "Species": "Luke Skywalker", "name": undefined}])
  });


});
