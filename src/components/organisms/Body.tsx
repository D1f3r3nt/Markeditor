import {PreviewSide} from "../molecules/PreviewSide.tsx";
import {EditorSide} from "../molecules/EditorSide.tsx";

export const Body = () => {

    return (
        <div className='grid grid-cols-2 h-full'>
                <EditorSide />
                <PreviewSide />
        </div>
    )
}