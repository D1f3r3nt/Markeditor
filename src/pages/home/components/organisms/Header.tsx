import {InputName} from "../atoms/InputName.tsx";
import {Modals} from "./Modals.tsx";
import {ListenerKeydown} from "../atoms/ListenerKeydown.tsx";
import {HeaderButtons} from "../molecules/HeaderButtons.tsx";

export const Header = () => {

    return (
        <div className='h-[100px] px-5 py-2 flex justify-between border-b-[1px] border-[#9095a0]'>
            <InputName/>

            <HeaderButtons/>

            <Modals/>
            <ListenerKeydown/>
        </div>
    )
}