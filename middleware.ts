import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');

    const protectedRoutes = [
        "/dashboard",
        "/home",
        "/category",
        "/",
        "/profile",
        "/settings"
    ];

    const publicRoutes = [
        "/login",
        "/signup",
        "/"
    ];

    const path = request.nextUrl.pathname;


    if (token && publicRoutes.includes(path)) {
        const dashboardURL = new URL("/dashboard", request.nextUrl.origin);
        return NextResponse.redirect(dashboardURL.toString());
    }

    if (!token && protectedRoutes.includes(path)) {
        const loginURL = new URL("/login", request.nextUrl.origin);
        return NextResponse.redirect(loginURL.toString());
    }


    return NextResponse.next();
}
