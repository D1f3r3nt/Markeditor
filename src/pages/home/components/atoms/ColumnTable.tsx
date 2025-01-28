import * as React from "react";

interface ColumnTableProps {
    children: React.ReactNode;
}

export const ColumnTable = ({ children }: ColumnTableProps) => {

    return (
        <div className='flex flex-row justify-between last:[&>div]:border-r-[1px] [&>div]:last:border-b-[1px]'>
            {children}
        </div>
    )
}