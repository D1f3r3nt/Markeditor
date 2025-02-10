import { GithubIcon } from "../../../../icons/GithubIcon"

export const References = () => {

    const githubCode = 'https://github.com/D1f3r3nt/Markeditor'

    return (
        <div className='flex flex-col justify-center'>
            <div className='flex flex-row gap-x-1 mb-2'>
                <span className='text-[#FFFFFFED] text-[15px]'>MarkEditor</span>
                <a href='https://www.linkedin.com/in/marc-santisteban-ruiz/'>
                    <span className='text-[#9095a0] text-[10px]'>by Marc Santisteban Ruiz</span>
                </a>
            </div>

            <a href={githubCode}>
                <div
                    className={`border-[#9095a0] border-[1px] rounded flex 
                flex-row p-2 items-center h-full gap-x-1 w-fit 
                hover:cursor-pointer hover:border-[#FFFFFFED] [&>*]:hover:fill-[#FFFFFFED] [&>*]:hover:text-[#FFFFFFED]`}
                >
                    <GithubIcon className='fill-[#9095a0]'/>
                    <p className='font-bold text-[#9095a0]'>Github code</p>
                </div>
            </a>
        </div>
    )
}