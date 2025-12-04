import { NextResponse } from "next/server";

const passwords: Record<string, string> = {
  ml: process.env.COURSE_PASSWORD_ML || "",
  ai: process.env.COURSE_PASSWORD_AI || "",
  cv: process.env.COURSE_PASSWORD_CV || "",
  qc: process.env.COURSE_PASSWORD_QC || "",
};

export async function POST(req: Request) {
  try {
    const { courseId, password } = await req.json();

    if (passwords[courseId] === password) {
      return NextResponse.json({ allowed: true });
    }

    return NextResponse.json({ allowed: false });
  } catch (err) {
    return NextResponse.json({ allowed: false }, { status: 400 });
  }
}

