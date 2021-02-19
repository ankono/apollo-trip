import { Trip } from './models/Trip';

export const resolvers = {
  Query: {
    trips: () => Trip.find()
  },
  Mutation: {
    createTrip: async (_, { }) => {
      const journey = new Trip({});
      await journey.save();
      return journey;
    }
  }
}
