import {CopyIcon} from "../../icons/CopyIcon.tsx";
import {useContext, useState} from "react";
import {DataContext} from "../../pages/home/DataProvider.tsx";
import {CorrectIcon} from "../../icons/CorrectIcon.tsx";

export const EditorSide = () => {

    const { setInput, input } = useContext(DataContext)
    const [correctIcon, setCorrectIcon] = useState(false)

    return (
        <div className='flex flex-col border-r-[1px] border-[#9095a0]'>
            <div className='flex justify-between items-center border-b-[1px] border-l-[1px] border-[#9095a0] px-5 py-2'>
                <span className='text-[15px] text-[#9095a0]'>Editor</span>
                <div
                    className='[&>*]:fill-[#9095a0] cursor-pointer'
                    onClick={() => {
                        navigator.clipboard.writeText(input)
                        setCorrectIcon(true)
                        setTimeout(() => {
                            setCorrectIcon(false)
                        }, 1000)
                    }}
                >
                    {
                        correctIcon ? <CorrectIcon /> : <CopyIcon />
                    }
                </div>
            </div>
            <textarea
                id={'editor'}
                onChange={(event) => setInput(event.target.value)}
                className='editable'
                placeholder='Enter markdown here'
                value={input}
            />
        </div>
    )
}