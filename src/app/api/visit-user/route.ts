import { connectToDB } from "@/lib/mongodb";
import { visiterFrom } from "@/model/visiterFrom";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    try {
        const { visiterUrl } = await request.json()
        // console.time("MongoDB connect");
        await connectToDB();
        // console.timeEnd("MongoDB connect");
        await visiterFrom.create({ visitUrl: visiterUrl })
        // await mongoose.connection.close()
        return NextResponse.json({ message: "Visiter sent successfully" }, { status: 201 })
    } catch (err) {
        console.error(err);
        await mongoose.connection.close()
        return NextResponse.json({ error: 'Failed to sent visiter' }, { status: 500 });
    }
}
