import {CrossIcon} from "../../icons/CrossIcon.tsx";
import {AddIcon} from "../../icons/AddIcon.tsx";
import {useContext, useState} from "react";
import {ModalButtons} from "../atoms/ModalButtons.tsx";
import {DataContext} from "../../pages/home/DataProvider.tsx";
import {useButtons} from "../../pages/home/model/useButtons.ts";

interface ListModalProps {
    isNum: boolean
}

export const ListModal = ({
    isNum = true
}: ListModalProps) => {

    const [values, setValues] = useState<string[]>(['Example 1', 'Example 2'])
    const { requestModal, input, setInput, setModalOpen, setRequestModal } = useContext(DataContext)
    const { setStartLine } = useButtons(input, setInput, setModalOpen, setRequestModal)

    const handleSetValue = (index: number, value: string) => {
        setValues(values.map((v, i) => i === index ? value : v))
    }

    const handleSubmitNum = () => {
        const result = values.map((val, index) => (index+1) + '. ' + val).join('\n')

        setInput(setStartLine(requestModal?.cursor ?? 0, result))
    }

    const handleSubmitDash = () => {
        const key = '- '
        const result = values.map(val => key + val).join('\n')

        setInput(setStartLine(requestModal?.cursor ?? 0, result))
    }

    return (
        <>
            <div className='h-[300px] w-[250px] flex-col flex gap-y-1 overflow-y-scroll'>
                {
                    values.map((value, index) => (
                        <div className='flex flex-row gap-x-2 items-center' key={index}>
                            {
                                isNum ? (
                                    <>{index + 1}.</>
                                ) : (
                                    '-'
                                )
                            }

                            <input type="text"
                                   className='border-[#9095a0] border-b-[1px] outline-none w-full'
                                   value={value}
                                   onChange={e => handleSetValue(index, e.target.value)}
                            />
                        </div>
                    ))
                }

                <div className='w-full flex justify-around'>
                    <div
                        className='cursor-pointer rounded bg-red-400 flex justify-center items-center p-2'
                        onClick={() => setValues(values.slice(0, values.length - 1))}
                    >
                        <CrossIcon/>
                    </div>
                    <div
                        className='cursor-pointer rounded bg-green-400 flex justify-center items-center p-2'
                        onClick={() => setValues([...values, ''])}
                    >
                        <AddIcon/>
                    </div>
                </div>
            </div>
            <ModalButtons handleSubmit={isNum ? handleSubmitNum : handleSubmitDash} />
        </>
    )
}