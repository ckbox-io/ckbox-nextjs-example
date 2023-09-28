import React from 'react';

type Props = {
    children: React.ReactNode;
    onClick: () => void;
};

export default function Button({ children, onClick }: Props) {
    return (
        <button
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
