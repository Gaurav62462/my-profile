// /app/api/db-status/route.ts
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectToDB } from '@/lib/mongodb';

export async function GET() {
  try {
    if (mongoose.connection.readyState !== 1) {
      await connectToDB();
    }

    return NextResponse.json({ connected: true }, { status: 200 });
  } catch (err) {
    console.error(err)
    return NextResponse.json({ connected: false }, { status: 500 });
  }
}
