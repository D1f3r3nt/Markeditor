import {useContext, useState} from "react";
import {ModalButtons} from "../../atoms/ModalButtons.tsx";
import {DataContext} from "../../../DataProvider.tsx";
import {useButtons} from "../../../utils/useButtons.ts";
import {PrincipalButton} from "../../atoms/PrincipalButton.tsx";

interface TaskModel {
    check: boolean;
    value: string;
}

export const TaskModal = () => {

    const emptyTask = {check: false, value: ''}

    const { requestModal, input, setInput, setModalOpen, setRequestModal } = useContext(DataContext)
    const { setStartLine } = useButtons(input, setInput, setModalOpen, setRequestModal)

    const [task, setTask] = useState<TaskModel[]>(Array(2).fill(emptyTask))

    const handleSetValue = (index: number, value: string, check: boolean) => {
        const newTask = {check, value}

        setTask(task.map((t, i) => i === index ? newTask : t))
    }

    const handleSubmitTask = () => {
        const result = task.map(t => `${t.check ? '- [x]' : '- [ ]'} ${t.value}`).join('\n')

        setInput(setStartLine(requestModal?.cursor ?? 0, result))
    }

    return (
        <>
            <div className='h-[300px] w-[250px] flex-col flex gap-y-1 overflow-y-scroll mb-2'>
                <div className='w-full flex justify-around mb-2'>
                    <PrincipalButton
                        className='bg-gray-200'
                        onClick={() => setTask(task.slice(0, task.length - 1))}
                    >
                        Remove Column
                    </PrincipalButton>
                    <PrincipalButton
                        className='bg-[#242424] text-[#FFFFFFED]'
                        onClick={() => setTask([...task, emptyTask])}
                    >
                        Add Column
                    </PrincipalButton>
                </div>

                {
                    task.map((t, index) => (
                        <div className='flex flex-row gap-x-2 items-center' key={index}>
                            <input
                                type='checkbox'
                                checked={t.check}
                                className='hover:cursor-pointer'
                                onClick={() => handleSetValue(index, t.value, !t.check)}
                            />

                            <input type="text"
                                   className='border-[#9095a0] border-b-[1px] outline-none w-full'
                                   value={t.value}
                                   onChange={e => handleSetValue(index, e.target.value, t.check)}
                            />
                        </div>
                    ))
                }
            </div>
            <ModalButtons handleSubmit={handleSubmitTask}/>
        </>
    )
}