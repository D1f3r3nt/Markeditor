import {Modal} from "../atoms/Modal.tsx";
import {useContext} from "react";
import {DataContext} from "../../DataProvider.tsx";
import {ListModal} from "../molecules/modals/ListModal.tsx";
import {CodeModal} from "../molecules/modals/CodeModal.tsx";
import {LinkModal} from "../molecules/modals/LinkModal.tsx";
import {TaskModal} from "../molecules/modals/TaskModal.tsx";
import {DescriptionModal} from "../molecules/modals/DescriptionModal.tsx";
import {TableModal} from "../molecules/modals/TableModal.tsx";

export const Modals = () => {

    const { modalOpen, requestModal } = useContext(DataContext)

    const getModal = () => {
        switch (requestModal?.type) {
            case 'listNum':
                return <ListModal isNum />
            case 'listDash':
                return <ListModal />
            case 'code':
                return <CodeModal />
            case 'link':
                return <LinkModal />
            case 'image':
                return <LinkModal isImage />
            case 'check':
                return <TaskModal />
            case 'tag':
                return <DescriptionModal />
            case 'table':
                return <TableModal />
            default:
                return <ListModal />
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