import * as React from "react";

interface ToolbarProps {
    children: React.ReactNode;
    text: string;
    footer?: string;
}

export const Tooltip = ({
    children,
    text,
    footer
}: ToolbarProps) => {

    return (
        <div className='relative  [&>div]:hover:visible'>
            {children}
            <div
                className={`
                absolute t-[-5px] r-[105%] w-[120px] 
                bg-white text-black rounded py-1 z-10 p-2
                flex flex-col
                -translate-x-[80%] translate-y-[20%] invisible`}
            >
                {text}
                <span className='text-[12px] text-gray-400 w-full text-end'>{footer}</span>
            </div>
        </div>
    )
}