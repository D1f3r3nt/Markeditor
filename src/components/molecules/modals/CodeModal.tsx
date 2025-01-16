import {ModalButtons} from "../../atoms/ModalButtons.tsx";
import {useContext, useState} from "react";
import {DataContext} from "../../../pages/home/DataProvider.tsx";
import {useButtons} from "../../../pages/home/model/useButtons.ts";

export const CodeModal = () => {

    const [code, setCode] = useState<string>()

    const { requestModal, input, setInput, setModalOpen, setRequestModal } = useContext(DataContext)
    const { setStartLine } = useButtons(input, setInput, setModalOpen, setRequestModal)

    const handleSubmit = () => {
        if (!code) {
            // thr err
            return
        }

        const key = '```'
        const result = `${key}\n${code}\n${key}\n`

        setInput(setStartLine(requestModal?.cursor ?? 0, result))
    }

    return (
        <>
            <div className='h-[300px] w-[70vw] mb-2'>
                <textarea
                    value={code}
                    onChange={event => setCode(event.target.value)}
                    placeholder={'Paste code'}
                    className='outline-none w-full h-full resize-none bg-[#CACACAED] p-2'
                />
            </div>

            <ModalButtons handleSubmit={handleSubmit} />
        </>
    )
}