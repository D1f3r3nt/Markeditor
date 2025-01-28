import {useContext} from "react";
import {DataContext} from "../../DataProvider.tsx";

interface ModalButtonsProps {
    handleSubmit: () => void;
}

export const ModalButtons = ({ handleSubmit }: ModalButtonsProps) => {
    const {setModalOpen, setRequestModal} = useContext(DataContext);

    return (
        <div className='w-full flex justify-between items-center'>
            <div
                className='bg-gray-200 p-2 rounded cursor-pointer hover:scale-105'
                onClick={() => {
                    setRequestModal(undefined)
                    setModalOpen(false)
                }}
            >
                Close
            </div>
            <div
                className='p-2 rounded bg-[#242424] text-[#FFFFFFED] cursor-pointer hover:scale-105'
                onClick={() => {
                    handleSubmit()
                    setRequestModal(undefined)
                    setModalOpen(false)
                }}
            >
                Submit
            </div>
        </div>
    )
}