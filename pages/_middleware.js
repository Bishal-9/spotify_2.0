import { getToken } from "next-auth/jwt"
import { NextResponse } from 'next/server'

export async function middleware(req) {

    // Token will exist if the user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET })

    const { pathname } = req.nextUrl

    // Allow the request  if the following is true:
        // 1.   Try's to authenticate
        // 2.   The token exist
    if (pathname.includes('/api/auth') || token) {
        return NextResponse.next()
    }

    // Redirect them to login if they don't have token and are requesting a protected route
    if (!token && pathname !== '/login') {
        return NextResponse.redirect('/login')
    }
}