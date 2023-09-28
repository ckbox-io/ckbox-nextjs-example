import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { AuthOptions, User } from 'next-auth';

const dbUsers: (User & { password: string })[] = [
    {
        id: '1',
        role: 'user',
        email: 'user@acme.com',
        password: 'testpwd123',
        name: 'John'
    },
    {
        id: '2',
        role: 'admin',
        email: 'admin@acme.com',
        password: 'testpwd123',
        name: 'Joe'
    },
    {
        id: '3',
        role: 'superadmin',
        email: 'superadmin@acme.com',
        password: 'testpwd123',
        name: 'Alice'
    }
];

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    label: 'Email'
                },
                password: {
                    label: 'Password'
                }
            },
            authorize: (credentials) => {
                const email = credentials?.email;
                const password = credentials?.password;

                const dbUser = dbUsers.find(
                    (dbUser) =>
                        dbUser.email === email && dbUser.password === password
                );

                if (!dbUser) {
                    throw new Error('Auth: Provide correct email and password');
                }

                return {
                    id: dbUser.email,
                    email: dbUser.email,
                    name: dbUser.name,
                    role: dbUser.role
                };
            }
        })
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                token.user = user;
            }

            return token;
        },
        session: ({ token, session }) => {
            session.user = token.user;

            return session;
        }
    }
};

export default NextAuth(authOptions);
