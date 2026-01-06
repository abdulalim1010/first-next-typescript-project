import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const events = await db.collection("events").find({}).toArray();

    // _id কে string বানানো (Next.js JSON serialization এর জন্য)
    const serializedEvents = events.map((event) => ({
      ...event,
      _id: event._id.toString(),
    }));

    return NextResponse.json(serializedEvents);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
