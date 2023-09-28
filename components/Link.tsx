import React from 'react';
import NextLink, { type LinkProps } from 'next/link';

export default function Link(
    props: Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        keyof LinkProps
    > &
        LinkProps & {
            children?: React.ReactNode;
        } & React.RefAttributes<HTMLAnchorElement>
) {
    return (
        <NextLink
            className="text-blue-600 dark:text-blue-500 hover:underline"
            {...props}
        />
    );
}
