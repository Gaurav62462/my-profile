import { connectToDB } from "@/lib/mongodb";
import { waveClicker } from "@/model/waveClicker";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST() {

    try {

        await connectToDB();
        const data = await waveClicker.findOneAndUpdate(
            {},
            { $inc: { count: 1 } },
            { new: true, upsert: true }
        );
        return NextResponse.json({ message: "Counter increase successfully", count: data.count }, { status: 201 })
    } catch (err) {
        console.error(err);
        await mongoose.connection.close()
        return NextResponse.json({ error: 'Failed to counter increase' }, { status: 500 });
    }
}
