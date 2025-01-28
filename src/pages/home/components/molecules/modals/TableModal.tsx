import {ModalButtons} from "../../atoms/ModalButtons.tsx";
import {useContext, useState} from "react";
import {ColumnTable} from "../../atoms/ColumnTable.tsx";
import {CellTable} from "../../atoms/CellTable.tsx";
import {PrincipalButton} from "../../atoms/PrincipalButton.tsx";
import {useTable} from "../../../utils/useTable.ts";
import {useButtons} from "../../../utils/useButtons.ts";
import {DataContext} from "../../../DataProvider.tsx";

export const TableModal = () => {

    const [tableValue, setTableValue] = useState<string[][]>(Array(3).fill(Array(3).fill(undefined)))
    const { requestModal, input, setInput, setModalOpen, setRequestModal } = useContext(DataContext)
    const { setStartLine } = useButtons(input, setInput, setModalOpen, setRequestModal)

    const {
        handleAddColumn,
        handleRemoveColumn,
        handleAddRow,
        handleRemoveRow,
        handleChangeCell
    } = useTable(tableValue, setTableValue)

    const handleSubmit = () => {

        const result = tableValue.map((row, index) => {
            if (index === 0) {
                const headerLine = Array(row.length).fill('-----------')

                return `${row.join(' | ')}\n${headerLine.join(' | ')}`
            }
            return row.join(' | ')
        }).join('\n')

        setInput(setStartLine(requestModal?.cursor ?? 0, result))
    }

    return (
        <>
            <div className='h-[500px] w-[70vw] mb-2 flex flex-col'>
                <div className='w-full flex justify-around mb-2'>
                    <div className='flex gap-x-1'>
                        <PrincipalButton
                            className='bg-gray-200'
                            onClick={handleRemoveColumn}
                        >
                            Remove Column
                        </PrincipalButton>
                        <PrincipalButton
                            className='bg-[#242424] text-[#FFFFFFED]'
                            onClick={handleAddColumn}
                        >
                            Add Column
                        </PrincipalButton>
                    </div>
                    <div className='flex gap-x-1'>
                        <PrincipalButton
                            className='bg-gray-200'
                            onClick={handleRemoveRow}
                        >
                            Remove Row
                        </PrincipalButton>
                        <PrincipalButton
                            className='bg-[#242424] text-[#FFFFFFED]'
                            onClick={handleAddRow}
                        >
                            Add Row
                        </PrincipalButton>
                    </div>
                </div>
                <div className='[&>div]:first:[&>div]:bg-[#242424] [&>div]:first:[&>div]:text-[#FFFFFFED]'>
                    {
                        tableValue.map((row, y) => (
                            <ColumnTable>
                                {
                                    row.map((value, x) => (
                                        <CellTable value={value} onChange={(v) => handleChangeCell(x, y, v)}/>
                                    ))
                                }
                            </ColumnTable>
                        ))
                    }
                </div>


            </div>

            <ModalButtons handleSubmit={handleSubmit}/>
        </>
    )
}