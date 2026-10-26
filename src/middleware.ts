import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const lang = req.headers.get("accept-language")?.toLowerCase().startsWith("ar") ? "ar" : "en";
  return NextResponse.redirect(new URL(`/${lang}`, req.url));
}

export const config = { matcher: ["/"] };
