import * as React from "react";

interface PrincipalButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick: () => void;
}

export const PrincipalButton = ({
    children,
    onClick,
    className
}: PrincipalButtonProps) => {

    return (
        <div
            className={`cursor-pointer rounded flex justify-center items-center p-2 ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}