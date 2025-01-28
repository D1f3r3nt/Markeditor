import {useContext} from "react";
import {DataContext} from "../../DataProvider.tsx";
import {PrincipalButton} from "./PrincipalButton.tsx";

interface ModalButtonsProps {
    handleSubmit: () => void;
}

export const ModalButtons = ({ handleSubmit }: ModalButtonsProps) => {
    const {setModalOpen, setRequestModal} = useContext(DataContext);

    return (
        <div className='w-full flex justify-between items-center'>
            <PrincipalButton
                className='bg-gray-200 hover:scale-105'
                onClick={() => {
                    setRequestModal(undefined)
                    setModalOpen(false)
                }}
            >
                Close
            </PrincipalButton>
            <PrincipalButton
                className='bg-[#242424] text-[#FFFFFFED] hover:scale-105'
                onClick={() => {
                    handleSubmit()
                    setRequestModal(undefined)
                    setModalOpen(false)
                }}
            >
                Submit
            </PrincipalButton>
        </div>
    )
}