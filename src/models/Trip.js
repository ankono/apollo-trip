import mongoose from 'mongoose';

export const Trip = mongoose.model('Trip', { fromPlaceId: String, toPlaceId: String });