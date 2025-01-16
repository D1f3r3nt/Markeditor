import {InputName} from "../atoms/InputName.tsx";
import {IconsButton} from "../atoms/IconsButton.tsx";
import {HOneIcon} from "../../icons/HOneIcon.tsx";
import {HTwoIcon} from "../../icons/HTwoIcon.tsx";
import {HThreeIcon} from "../../icons/HThreeIcon.tsx";
import {BoldIcon} from "../../icons/BoldIcon.tsx";
import {ItalicIcon} from "../../icons/ItalicIcon.tsx";
import {TerminalIcon} from "../../icons/TerminalIcon.tsx";
import {ListNumbersIcon} from "../../icons/ListNumbersIcon.tsx";
import {ListDashIcon} from "../../icons/ListDashIcon.tsx";
import {LineIcon} from "../../icons/LineIcon.tsx";
import {LinkIcon} from "../../icons/LinkIcon.tsx";
import {ImageIcon} from "../../icons/ImageIcon.tsx";
import {TableIcon} from "../../icons/TableIcon.tsx";
import {SwatchesIcon} from "../../icons/SwatchesIcon.tsx";
import {StrikethroughIcon} from "../../icons/StrikethroughIcon.tsx";
import {CheckIcon} from "../../icons/CheckIcon.tsx";
import {UpperIcon} from "../../icons/UpperIcon.tsx";
import {useContext} from "react";
import {DataContext} from "../../pages/home/DataProvider.tsx";
import {useButtons} from "../../pages/home/model/useButtons.ts";
import {BracketsIcon} from "../../icons/BracketsIcon.tsx";
import {Modals} from "./Modals.tsx";

export const Header = () => {

    const { setInput, input, setModalOpen, setRequestModal } = useContext(DataContext)
    const {
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
    } = useButtons(input, setInput, setModalOpen, setRequestModal)

    return (
        <div className='h-[100px] px-5 py-2 flex justify-between border-b-[1px] border-[#9095a0]'>
            <InputName />

            <div className='grid grid-rows-2 grid-flow-col gap-2'>
                <IconsButton onClick={handleHeaderOne}>
                    <HOneIcon />
                </IconsButton>
                <IconsButton onClick={handleItalic}>
                    <ItalicIcon />
                </IconsButton>
                <IconsButton onClick={handleHeaderTwo}>
                    <HTwoIcon />
                </IconsButton>
                <IconsButton onClick={handleBold}>
                    <BoldIcon />
                </IconsButton>
                <IconsButton onClick={handleHeaderThree}>
                    <HThreeIcon />
                </IconsButton>
                <IconsButton onClick={handleStrikethrough}>
                    <StrikethroughIcon />
                </IconsButton>
                <IconsButton onClick={() => handleModals('listNum')}>
                    <ListNumbersIcon />
                </IconsButton>
                <IconsButton onClick={handleBlockquote}>
                    <TerminalIcon />
                </IconsButton>
                <IconsButton onClick={() => handleModals('listDash')}>
                    <ListDashIcon />
                </IconsButton>
                <IconsButton onClick={() => handleModals('code')}>
                    <BracketsIcon />
                </IconsButton>
                <IconsButton onClick={() => handleModals('link')}>
                    <LinkIcon />
                </IconsButton>
                <IconsButton onClick={handleLine}>
                    <LineIcon />
                </IconsButton>
                <IconsButton onClick={() => handleModals('table')}>
                    <TableIcon />
                </IconsButton>
                <IconsButton onClick={() => handleModals('image')}>
                    <ImageIcon />
                </IconsButton>
                <IconsButton onClick={() => handleModals('check')}>
                    <CheckIcon />
                </IconsButton>
                <IconsButton onClick={() => handleModals('tag')}>
                    <SwatchesIcon />
                </IconsButton>
                <IconsButton onClick={handleUppercase}>
                    <UpperIcon />
                </IconsButton>
            </div>

            <Modals />
        </div>
    )
}