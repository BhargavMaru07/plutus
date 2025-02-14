import { NextRequest, NextResponse } from "next/server";
import { updateStrategy } from "@/lib/strategy";

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, duration, maxProfit, maxLoss, totalAmount } = body;

    if (!id) {
      return NextResponse.json({ message: "Strategy ID is required" }, { status: 400 });
    }

    const updatedStrategy = await updateStrategy({
      id,
      duration,
      maxProfit,
      maxLoss,
      totalAmount,
    });

    return NextResponse.json({ message: "Strategy updated", updatedStrategy }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: (error as Error).message }, { status: 500 });
  }
}
