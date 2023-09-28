import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from './Link';
import Button from './Button';

export default function Nav() {
    const { data, status } = useSession();

    return (
        <nav className="border-b border-gray-200 py-5 relative z-20 bg-background shadow-[0_0_15px_0_rgb(0,0,0,0.1)]">
            <div className="flex items-center lg:px-6 px-8 mx-auto max-w-7xl">
                <div className="flex-1 hidden md:flex">
                    <Link href="/">Home</Link>
                </div>
                <div className="flex-1 justify-end flex items-center md:flex gap-3 h-8">
                    {status === 'authenticated' ? (
                        <>
                            <span>Welcome, {data?.user?.name}!</span>
                            <Button onClick={() => signOut()}>Sign out</Button>
                        </>
                    ) : status === 'loading' ? null : (
                        <Button onClick={() => signIn()}>Sign in</Button>
                    )}
                    <Link
                        href="https://github.com/ckbox-io/ckbox-nextjs-example"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </Link>
                </div>
            </div>
        </nav>
    );
}
