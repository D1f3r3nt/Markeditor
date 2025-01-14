import {Modal} from "../atoms/Modal.tsx";
import {useContext} from "react";
import {DataContext} from "../../pages/home/DataProvider.tsx";
import {ListModal} from "../molecules/ListModal.tsx";

export const Modals = () => {

    const { modalOpen, requestModal } = useContext(DataContext)

    const getModal = () => {
        switch (requestModal?.type) {
            case 'listNum':
                return <ListModal isNum={true} />
            case 'listDash':
                return <ListModal isNum={false} />
            default:
                return <ListModal isNum={false} />
        }
    }

    return (
        <Modal
            isOpen={modalOpen && requestModal !== undefined}
        >
            {getModal()}
        </Modal>
    )
}