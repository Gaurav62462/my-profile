import mongoose, { Schema, models } from 'mongoose';

const visiterSchema = new Schema({
  visiterUrl: String,
  visitedAt: { type: Date, default: Date.now },
  locRes : {
  ip: String,
  city: String,
  region: String,
  country_name: String,
  org: String,
  network: String,
  latitude: Number,
  longitude: Number,
  timezone: String,
  utc_offset: String,
  asn: String,
  }
});
export const visiterFrom = models.visiterFrom || mongoose.model('visiterFrom', visiterSchema);
