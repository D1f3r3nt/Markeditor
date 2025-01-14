import {CopyIcon} from "../../icons/CopyIcon.tsx";
import {useContext} from "react";
import {DataContext} from "../../pages/home/DataProvider.tsx";

export const EditorSide = () => {

    const { setInput, input } = useContext(DataContext)

    return (
        <div className='flex flex-col border-r-[1px] border-[#9095a0]'>
            <div className='flex justify-between items-center border-b-[1px] border-l-[1px] border-[#9095a0] px-5 py-2'>
                <span className='text-[15px] text-[#9095a0]'>Editor</span>
                <div className='[&>*]:fill-[#9095a0]'><CopyIcon /></div>
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