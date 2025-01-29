import {forwardRef, useEffect, useState} from "react";
import {CustomContentProps, SnackbarContent} from "notistack";

interface SnackbarProps extends CustomContentProps {
    type: 'success' | 'error';
}

export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
        ({ type, message }, ref) => {

        const [classes, setClasses] = useState('')

        useEffect(() => {
            if (type === 'success') {
                setClasses('bg-green-100 border-green-500 text-green-700')
            } else {
                setClasses('bg-red-100 border-red-500 text-red-700')
            }
        }, []);

        return (
            <SnackbarContent ref={ref} className={`border-l-4 flex flex-col p-4 rounded-lg max-w-[250px] ${classes}`}>
                <p className="text-lg font-semibold">Error</p>
                <p>{message}</p>
            </SnackbarContent>
        )
    }
)