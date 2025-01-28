import {useContext, useState} from "react";
import {ModalButtons} from "../../atoms/ModalButtons.tsx";
import {DataContext} from "../../../DataProvider.tsx";
import {useButtons} from "../../../utils/useButtons.ts";
import {PrincipalButton} from "../../atoms/PrincipalButton.tsx";

interface ListModalProps {
    isNum?: boolean
}

export const ListModal = ({
    isNum = false
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
            <div className='h-[300px] w-[250px] flex-col flex gap-y-1 overflow-y-scroll mb-2'>
                <div className='w-full flex justify-around mb-2'>
                    <PrincipalButton
                        className='bg-gray-200'
                        onClick={() => setValues(values.slice(0, values.length - 1))}
                    >
                        Remove Column
                    </PrincipalButton>
                    <PrincipalButton
                        className='bg-[#242424] text-[#FFFFFFED]'
                        onClick={() => setValues([...values, ''])}
                    >
                        Add Column
                    </PrincipalButton>
                </div>

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
            </div>
            <ModalButtons handleSubmit={isNum ? handleSubmitNum : handleSubmitDash}/>
        </>
    )
}