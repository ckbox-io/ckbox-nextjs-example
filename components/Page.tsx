import React from 'react';

type Props = {
    children: React.ReactNode;
};

export default function Page({ children }: Props) {
    return (
        <main className="w-full max-w-4xl mx-auto py-16 h-full flex flex-col">
            {children}
        </main>
    );
}
