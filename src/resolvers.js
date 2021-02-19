import { Trip } from './models/Trip';

export const resolvers = {
  Query: {
    trips: () => Trip.find()
  },
  Mutation: {
    createTrip: async (_, { input }) => {
      const journey = new Trip({ fromPlaceId: input.fromPlaceId, toPlaceId: input.toPlaceId });
      await journey.save();
      return journey;
    }
  }
}
