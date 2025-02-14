import { createStrategy } from "@/lib/strategy";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { duration, maxProfit, maxLoss, totalAmount, userId } = body;

    if (!userId) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    const strategy = await createStrategy({ duration, maxProfit, maxLoss, totalAmount, userId });

    return NextResponse.json({ message: "Strategy created successfully", strategy }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
