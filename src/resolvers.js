import { Trip } from './models/Trip';
import { getPlaceName } from './servises';

export const resolvers = {
  Query: {
    trips: async (_, { offset, limit }) => {
      const returnedTrips = await Trip.find().skip(offset).limit(limit)
      return returnedTrips
    }
  },
  Mutation: {
    createTrip: async (_, { input }) => {
      const inputArray = [input.fromPlaceId, input.toPlaceId];
      const placeIdsArr = await getPlaceName(...inputArray)
      const journey = new Trip({
        fromPlaceId: placeIdsArr[0], toPlaceId: placeIdsArr[1]
      });
      await journey.save();
      return journey;
    }
  }
}
