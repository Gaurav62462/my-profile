// lib/models/User.ts
import mongoose, { Schema, models } from 'mongoose';

const visiterSchema = new Schema({
  visiterUrl: String,
});

export const visiterFrom = models.visiterFrom || mongoose.model('visiterFrom', visiterSchema);
