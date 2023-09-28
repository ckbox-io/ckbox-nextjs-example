import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    type CKBoxRole = 'user' | 'admin' | 'superadmin';

    interface User {
        email: string;
        name: string;
        role: CKBoxRole;
    }

    interface Session {
        user: User & DefaultSession['user'];
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        user: User;
    }
}
