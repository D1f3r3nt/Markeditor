import {ModalButtons} from "../../atoms/ModalButtons.tsx";
import {useContext, useState} from "react";
import {DataContext} from "../../../DataProvider.tsx";
import {useButtons} from "../../../utils/useButtons.ts";

interface LinkModalProps {
    isImage?: boolean;
}

export const LinkModal = ({isImage = false}: LinkModalProps) => {

    const [label, setLabel] = useState<string>()
    const [url, setUrl] = useState<string>()

    const { requestModal, input, setInput, setModalOpen, setRequestModal } = useContext(DataContext)
    const { setStartLine } = useButtons(input, setInput, setModalOpen, setRequestModal)

    const handleSubmitImage = () => {
        if (!label || !url) {
            // thr err
            return
        }

        const result = `![${label}](${url})`
        setInput(setStartLine(requestModal?.cursor ?? 0, result))
    }

    const handleSubmitLink = () => {
        if (!label || !url) {
            // thr err
            return
        }

        const result = `[${label}](${url})`
        setInput(setStartLine(requestModal?.cursor ?? 0, result))
    }

    return (
        <>
            <div className='h-[100px] w-[250px] mb-2 flex flex-col gap-2'>
                <input
                    type="text"
                    placeholder={`${isImage ? 'Alt' : 'Label'}`}
                    value={label}
                    onChange={event => setLabel(event.target.value)}
                    className='outline-none p-2 bg-[#DDDDDDED] rounded'
                />
                <input
                    type="text"
                    placeholder={`URL ${isImage ? 'of the image' : ''}`}
                    value={url}
                    onChange={event => setUrl(event.target.value)}
                    className='outline-none p-2 bg-[#DDDDDDED] rounded'
                />
            </div>

            <ModalButtons handleSubmit={isImage ? handleSubmitImage : handleSubmitLink} />
        </>
    )
}