interface ModalProps {
    isOpen: boolean
    children: React.ReactNode;
    className?: string;
}

export const Modal = ({
    children,
    className,
    isOpen
}: ModalProps) => {

    return (
        <div className={`fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center ${isOpen ? '' : 'hidden'} ${className}`}>
            <div className='bg-white rounded shadow-md p-8 text-black'>{children}</div>
        </div>
    )
}