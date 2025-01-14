import {useContext} from "react";
import {DataContext} from "../../pages/home/DataProvider.tsx";

interface ModalButtonsProps {
    handleSubmit: () => void;
}

export const ModalButtons = ({ handleSubmit }: ModalButtonsProps) => {
    const {setModalOpen, setRequestModal} = useContext(DataContext);

    return (
        <div className='w-full flex justify-between items-center'>
            <div onClick={() => {
                setRequestModal(undefined)
                setModalOpen(false)
            }}>Close</div>
            <div onClick={() => {
                handleSubmit()
                setRequestModal(undefined)
                setModalOpen(false)
            }}>Submit</div>
        </div>
    )
}