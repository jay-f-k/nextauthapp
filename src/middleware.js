import { NextResponse } from "next/server";

export function middleware(request) {
	const pathname = request.nextUrl.pathname;
	const token = request.cookies.get("next-auth.session-token")?.value || "";

	const publicpath = pathname === "/login" || pathname === "regsiter";

	if (publicpath && token) {
		return NextResponse.redirect(new URL("/", request.nextUrl));
	}
	if (!publicpath && !token) {
		return NextResponse.redirect(new URL("/login", request.nextUrl));
	}
}
export const config = {
	matcher: [
		"/profile/:path*",
		"/blog/:path*",
		"/post/:path*",
		"/login",
		"/regsiter",
	],
};
