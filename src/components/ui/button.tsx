    import React from 'react';

    interface ButtonProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    children: React.ReactNode;
    }

    export function Button({ size = 'lg', className, children }: ButtonProps) {
    return (
        <button className={`btn btn-${size} ${className}`}>
        {children}
        </button>
    );
    }
