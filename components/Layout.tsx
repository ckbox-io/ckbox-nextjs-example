import React from 'react';
import Nav from './Nav';

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div className="mx-auto h-screen flex flex-col">
            <Nav />
            <div className="px-8 flex-1 bg-accents-0">{children}</div>
        </div>
    );
}
