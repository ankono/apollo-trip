import { Trip } from './models/Trip';
import { getPlaceName } from './servises';

export const resolvers = {
  Query: {
    trips: async (_, { offset, limit }) => {
      const returnedTrips = await Trip.find().skip(offset).limit(limit);
      return returnedTrips;
    }
  },
  Mutation: {
    createTrip: async (_, { input }) => {
      const placeIdsArr = await getPlaceName(input.fromPlaceId, input.toPlaceId)
      const journey = new Trip({
        fromPlaceId: { name: placeIdsArr[0] }, toPlaceId: { name: placeIdsArr[1] }
      });
      await journey.save();
      return journey;
    }
  }
}
