import { NextRequest, NextResponse } from "next/server";
import { deleteStrategy } from "@/lib/strategy";

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "Strategy ID is required" }, { status: 400 });
    }

    const response = await deleteStrategy(id);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: ( error as Error).message }, { status: 500 });
  }
}
