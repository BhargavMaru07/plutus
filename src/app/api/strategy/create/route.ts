import { createStrategy } from "@/lib/strategy";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Use req.json() directly
    console.log("Parsed request body:", body);

    const { duration, maxProfit, maxLoss, totalAmount, userId } = body;

    // Validate required fields
    if (!userId) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }
    if (!duration || maxProfit == null || maxLoss == null || totalAmount == null) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const strategy = await createStrategy({ duration, maxProfit, maxLoss, totalAmount, userId });

    return NextResponse.json({ message: "Strategy created successfully", strategy }, { status: 201 });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ message: "An error occurred", error: (error as Error).message }, { status: 500 });
  }
}
