import { NextResponse } from 'next/server';
// import { jwtVerify } from 'jose';

export async function middleware(request) {
    const tokenObj = request.cookies.get('auth-token');
    const token = tokenObj?.value;
    const roleObj = request.cookies.get('role');
    const role = roleObj?.value;
    console.log('Token from cookies:', token);
    console.log('Role from cookies:', role);

    if (!token) {
        console.error('Token is missing.');
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        if (request.nextUrl.pathname.startsWith('/admin') && role !== 'admin') {
            return NextResponse.redirect(new URL('/unauthorized', request.url));
        }

        return NextResponse.next();
    } catch (error) {
        console.error('Token verification failed:', error.message);
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: ['/admin/:path*'],
};
