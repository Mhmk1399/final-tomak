// pages/api/auth/me.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'Toomakcompany171878';

export const GET = (req: NextRequest) => {
    const token = req.cookies.get('token')?.value; // Retrieve the JWT token value from the cookie

    if (!token) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    try {
        // Verify the JWT token
        const decoded = jwt.verify(token, JWT_SECRET);
        return NextResponse.json({ authenticated: true, user: decoded });
    } catch (err) {
        return new NextResponse('Invalid token', { status: 401 });
        alert(err);
    }
};
