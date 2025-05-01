// lib/models/User.ts
import mongoose, { Schema, models } from 'mongoose';

const visiterSchema = new Schema({
  visiterUrl: String,
  visitedAt: { type: Date, default: Date.now },
});

export const visiterFrom = models.visiterFrom || mongoose.model('visiterFrom', visiterSchema);
