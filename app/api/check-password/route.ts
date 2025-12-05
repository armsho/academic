import { NextResponse } from "next/server";
import passwords from "../../../passwords/passwords.json";

export async function POST(request: Request) {
  const { courseId, password } = await request.json();

  if (!courseId || !password)
    return NextResponse.json({ allowed: false });

  const correct = passwords[courseId];

  return NextResponse.json({
    allowed: correct === password,
  });
}

