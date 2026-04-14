import mongoose, { Schema, models } from 'mongoose';

const waveClickerSchema = new Schema({
  count: Number,
  countAt: { type: Date, default: Date.now },
});
export const waveClicker = models.waveClicker || mongoose.model('waveClicker', waveClickerSchema);
