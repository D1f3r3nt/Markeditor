import {Dispatch, SetStateAction} from "react";

export const useTable = (
    tableValue : string[][],
    setTableValue: Dispatch<SetStateAction<string[][]>>
) => {

    const handleAddColumn = () => {
        const newTable = tableValue.map((row) => [...row, ''])
        setTableValue(newTable)
    }

    const handleRemoveColumn = () => {
        const newTable = tableValue.map((row) => row.slice(0, row.length - 1))
        setTableValue(newTable)
    }

    const handleAddRow = () => {
        const newTable = [...tableValue, Array(tableValue[0].length).fill('')]
        setTableValue(newTable)
    }

    const handleRemoveRow = () => {
        const newTable = tableValue.slice(0, tableValue.length - 1)
        setTableValue(newTable)
    }

    const handleChangeCell = (cX: number, cY: number, value: string) => {
        const newTable = tableValue.map((row, y) => row.map((cell, x) => {
            if (x === cX && y === cY) {
                return value
            }
            return cell
        }));

        setTableValue(newTable)
    }

    return {
        handleAddColumn,
        handleRemoveColumn,
        handleAddRow,
        handleRemoveRow,
        handleChangeCell
    }
}