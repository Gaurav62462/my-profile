// lib/mongoose.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'my_portfolio',
      serverSelectionTimeoutMS: 3000,
      socketTimeoutMS: 4500,
    }).then((mongoose) =>{
      console.log('✅ MongoDB connected successfully');
     return mongoose
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

//gauravzestgeek //9cpZpys2Jl0D5q1x