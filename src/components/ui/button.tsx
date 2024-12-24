    import React from 'react';

    interface ButtonProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    children: React.ReactNode;
    }

    export const Button: React.FC<ButtonProps> = ({ size = 'md', className, children }) => {
    return (
        <button className={`btn btn-${size} ${className}`}>
        {children}
        </button>
    );
    };