import {ModalButtons} from "../../atoms/ModalButtons.tsx";
import {useContext, useState} from "react";
import {DataContext} from "../../../DataProvider.tsx";
import {useButtons} from "../../../utils/useButtons.ts";

export const DescriptionModal = () => {

    const [label, setLabel] = useState<string>()
    const [description, setDescription] = useState<string>()

    const { requestModal, input, setInput, setModalOpen, setRequestModal } = useContext(DataContext)
    const { setStartLine } = useButtons(input, setInput, setModalOpen, setRequestModal)

    const countFootnote = () => {
        const matches = input.match(/\[\^(\d+)\]/g)

        if (matches === null) {
            return 1
        }

        const lastNumber = matches[matches.length - 1].split('[^')[1].split(']')[0]

        return +lastNumber + 1;
    }

    const handleSubmitDescription = () => {
        if (!label || !description) {
            // thr err
            return
        }

        const footnote = countFootnote()

        const result = `${label} [^${footnote}] \n\n [^${footnote}]: ${description}`
        setInput(setStartLine(requestModal?.cursor ?? 0, result))
    }

    return (
        <>
            <div className='h-[100px] w-[250px] mb-2 flex flex-col gap-2'>
                <input
                    type="text"
                    placeholder={`Simple word`}
                    value={label}
                    onChange={event => setLabel(event.target.value)}
                    className='outline-none p-2 bg-[#DDDDDDED] rounded'
                />
                <input
                    type="text"
                    placeholder={`Description`}
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    className='outline-none p-2 bg-[#DDDDDDED] rounded'
                />
            </div>

            <ModalButtons handleSubmit={handleSubmitDescription} />
        </>
    )
}