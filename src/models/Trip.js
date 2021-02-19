import mongoose from 'mongoose';

export const Trip = mongoose.model('Trip', { name: String });