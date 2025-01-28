import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import {useContext} from "react";
import {DataContext} from "../../DataProvider.tsx";
import {CodeIcon} from "../../../../icons/CodeIcon.tsx";

export const PreviewSide = () => {

    const { input } = useContext(DataContext)

    return (
        <div className='flex flex-col max-h-full overflow-y-scroll'>
            <div className='flex justify-between items-center border-b-[1px] border-l-[1px] border-[#9095a0] px-5 py-2'>
                <span className='text-[15px] text-[#9095a0]'>Preview</span>
                <div className='[&>*]:fill-[#9095a0]'><CodeIcon/></div>
            </div>
            <Markdown
                children={input}
                remarkPlugins={[remarkGfm]}
                className='markdown overflow-y-scroll'
            />
        </div>
    )
}