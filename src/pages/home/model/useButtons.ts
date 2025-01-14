import {RequestModal, TypeModal} from "../../../models/RequestModal.ts";

export const useButtons = (
    input: string,
    setInput: (_: string) => void,
    setModalOpen: (_: boolean) => void,
    setRequestModal: (_: RequestModal) => void
) => {

    const getCursorPosition = () => {
        // @ts-ignore
        const start = document.getElementById('editor')?.selectionStart

        // @ts-ignore
        const end = document.getElementById('editor')?.selectionEnd

        return {
            start,
            end
        }
    }

    const setStartLine = (start: number, key: string) => {
        let characters = 0
        let s = start

        return input.split('\n').map(row => {
            let r = row

            if (characters <= s && s <= characters + row.length) {
                r = key + row
            }
            characters += row.length
            s--

            return r
        }).join('\n')
    }

    const setBorderSelection = (start: number, end: number, key: string) => {
        const firstSection = input.substring(0, start)
        const higlighSection = input.substring(start, end)
        const finalSection = input.substring(end)

        return firstSection + key + higlighSection + key + finalSection
    }

    const handleHeaderOne = () => {
        const key = '# '
        const { start } = getCursorPosition()

        if (start) {
            setInput(setStartLine(start, key))
        } else {
            setInput(key + input)
        }
    }

    const handleHeaderTwo = () => {
        const key = '## '
        const { start } = getCursorPosition()

        if (start) {
            setInput(setStartLine(start, key))
        } else {
            setInput(key + input)
        }
    }

    const handleHeaderThree = () => {
        const key = '### '
        const { start } = getCursorPosition()

        if (start) {
            setInput(setStartLine(start, key))
        } else {
            setInput(key + input)
        }
    }

    const handleItalic = () => {
        const key = '*'
        const { start, end } = getCursorPosition()

        if (start !== undefined && end !== undefined) {
            setInput(setBorderSelection(start, end, key))
        } else {
            console.error('No selection')
            // throw err
        }
    }

    const handleBold = () => {
        const key = '**'
        const { start, end } = getCursorPosition()

        if (start !== undefined && end !== undefined) {
            setInput(setBorderSelection(start, end, key))
        } else {
            console.error('No selection')
            // throw err
        }
    }

    const handleStrikethrough = () => {
        const key = '~~'
        const { start, end } = getCursorPosition()

        if (start !== undefined && end !== undefined) {
            setInput(setBorderSelection(start, end, key))
        } else {
            console.error('No selection')
            // throw err
        }
    }

    const handleBlockquote = () => {
        const key = '> '
        const { start } = getCursorPosition()

        if (start) {
            setInput(setStartLine(start, key))
        } else {
            setInput(key + input)
        }
    }

    const handleLine = () => {
        const key = '** **\n'
        const { start } = getCursorPosition()

        if (start) {
            setInput(setStartLine(start, key))
        } else {
            // thr err
        }
    }

    const handleUppercase = () => {
        const { start, end } = getCursorPosition()

        if (start !== undefined && end !== undefined) {
            const firstSection = input.substring(0, start)
            const higlighSection = input.substring(start, end).toUpperCase()
            const finalSection = input.substring(end)

            setInput(firstSection + higlighSection + finalSection)
        } else {
            console.error('No selection')
            // throw err
        }
    }

    const handleModals = (type: TypeModal) => {
        setRequestModal({
            type,
            cursor: getCursorPosition().start
        })
        setModalOpen(true)
    }

    return {
        setStartLine,
        handleHeaderOne,
        handleHeaderTwo,
        handleHeaderThree,
        handleItalic,
        handleBold,
        handleStrikethrough,
        handleBlockquote,
        handleLine,
        handleUppercase,
        handleModals
    }
}