import {ModalButtons} from "../../atoms/ModalButtons.tsx";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {InputText} from "../../../../components/atoms/InputText.tsx";
import {Dropdown} from "../../../../components/atoms/Dropdown.tsx";
import {useContext, useEffect, useState} from "react";
import {LabelValueObject} from "../../../../components/molecules/RadioButtons.tsx";
import {DataContext} from "../../../DataProvider.tsx";
import {useButtons} from "../../../utils/useButtons.ts";
import {enqueueSnackbar} from "notistack";

export const StatsModal = () => {

    const { requestModal, input: generalInput, setInput: setGeneralInput, setModalOpen, setRequestModal } = useContext(DataContext)
    const { setStartLine } = useButtons(generalInput, setGeneralInput, setModalOpen, setRequestModal)

    const GRAPHS : LabelValueObject[] = [
        {
            label: 'Github Stats',
            value: 'https://github-readme-stats.vercel.app/api?username='
        },
        {
            label: 'Most Used Languages',
            value: 'https://github-readme-stats.vercel.app/api/top-langs/?username='
        },
        {
            label: 'Streak stats',
            value: 'https://github-readme-streak-stats.herokuapp.com?user='
        },
    ]

    const THEMES : LabelValueObject[] = [
        {
            label: 'Light',
            value: 'default'
        },
        {
            label: 'Dark',
            value: 'dark'
        },
    ]

    const [input, setInput] = useState('')

    const [username, setUsername] = useState('')
    const [graph, setGraph] = useState(GRAPHS[0].value)
    const [theme, setTheme] = useState(THEMES[0].value)

    const [result, setResult] = useState('')

    useEffect(() => {

        let graphUrl = `${graph}${username}`

        if (theme !== 'default') {
            graphUrl += `&theme=${theme}`
        }

        const response = `![Github stats](${graphUrl})`
        setInput(response);
        setResult(response)
    }, [graph, theme, username]);

    const handleSubmit = () => {

        if (username.trim() === '') {
            enqueueSnackbar('You must set a github username', {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                type: 'error',
            })
            return
        }

        setGeneralInput(setStartLine(requestModal?.cursor ?? 0, result))
    }

    return (
        <>
            <div className='h-[500px] w-[800px] mb-2 flex flex-col'>
                <div className='flex flex-row w-full justify-around items-center'>
                    <InputText value={username} setValue={setUsername} label="Github's username" />
                    <Dropdown options={GRAPHS} value={graph} setValue={setGraph} label='Graph'/>
                    <Dropdown options={THEMES} value={theme} setValue={setTheme} label='Theme' />
                </div>

                <hr className='my-2'/>

                <div>
                    <Markdown
                        children={input}
                        remarkPlugins={[remarkGfm]}
                        className='markdown flex justify-center items-center'
                    />
                </div>
            </div>

            <ModalButtons handleSubmit={handleSubmit}/>
        </>
    )
}