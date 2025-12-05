import { NextResponse } from "next/server";
import passwordsJson from "../../../passwords/passwords.json";

// Define a type for your passwords
type Passwords = {
  [key: string]: string;
};

const passwords: Passwords = passwordsJson;

export async function POST(request: Request) {
  try {
    const { courseId, password } = await request.json();

    if (!courseId || !password) {
      return NextResponse.json({ allowed: false });
    }

    const correct = passwords[courseId];

    return NextResponse.json({
      allowed: correct === password,
    });
  } catch (err) {
    console.error("Error in check-password API:", err);
    return NextResponse.json({ allowed: false });
  }
}
