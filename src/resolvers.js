import { Trip } from './models/Trip';
import { getPlaceName } from './servises';

export const resolvers = {
  Query: {
    trips: (_, { offset, limit }) => {
      return Trip.find().skip(offset).limit(limit)
    }
  },
  Mutation: {
    createTrip: async (_, { input }) => {
      await getPlaceName()
      const journey = new Trip({
        fromPlaceId: input.fromPlaceId, toPlaceId: input.toPlaceId
      });
      await journey.save();
      console.log(journey);
      return journey;
    }
  }
}
