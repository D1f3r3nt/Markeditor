import {InputName} from "../atoms/InputName.tsx";
import {IconsButton} from "../atoms/IconsButton.tsx";
import {HOneIcon} from "../../../../icons/HOneIcon.tsx";
import {HTwoIcon} from "../../../../icons/HTwoIcon.tsx";
import {HThreeIcon} from "../../../../icons/HThreeIcon.tsx";
import {BoldIcon} from "../../../../icons/BoldIcon.tsx";
import {ItalicIcon} from "../../../../icons/ItalicIcon.tsx";
import {TerminalIcon} from "../../../../icons/TerminalIcon.tsx";
import {ListNumbersIcon} from "../../../../icons/ListNumbersIcon.tsx";
import {ListDashIcon} from "../../../../icons/ListDashIcon.tsx";
import {LineIcon} from "../../../../icons/LineIcon.tsx";
import {LinkIcon} from "../../../../icons/LinkIcon.tsx";
import {ImageIcon} from "../../../../icons/ImageIcon.tsx";
import {TableIcon} from "../../../../icons/TableIcon.tsx";
import {SwatchesIcon} from "../../../../icons/SwatchesIcon.tsx";
import {StrikethroughIcon} from "../../../../icons/StrikethroughIcon.tsx";
import {CheckIcon} from "../../../../icons/CheckIcon.tsx";
import {UpperIcon} from "../../../../icons/UpperIcon.tsx";
import {useContext} from "react";
import {DataContext} from "../../DataProvider.tsx";
import {useButtons} from "../../utils/useButtons.ts";
import {BracketsIcon} from "../../../../icons/BracketsIcon.tsx";
import {Modals} from "./Modals.tsx";
import {Tooltip} from "../../../components/atoms/Tooltip.tsx";
import {ListenerKeydown} from "../atoms/ListenerKeydown.tsx";

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
                <Tooltip text='Header' footer='Ctrl+H'>
                    <IconsButton onClick={handleHeaderOne}>
                        <HOneIcon />
                    </IconsButton>
                </Tooltip>

                <Tooltip text='Italic' footer='Ctrl+I'>
                    <IconsButton onClick={handleItalic}>
                        <ItalicIcon />
                    </IconsButton>
                </Tooltip>

                <Tooltip text='Subheader' footer='Ctrl+J'>
                    <IconsButton onClick={handleHeaderTwo}>
                        <HTwoIcon />
                    </IconsButton>
                </Tooltip>

                <Tooltip text='Bold' footer='Ctrl+B'>
                    <IconsButton onClick={handleBold}>
                        <BoldIcon />
                    </IconsButton>
                </Tooltip>

                <Tooltip text='Title' footer='Ctrl+K'>
                    <IconsButton onClick={handleHeaderThree}>
                        <HThreeIcon />
                    </IconsButton>
                </Tooltip>

                <Tooltip text='Strikethrough' footer='Ctrl+S'>
                    <IconsButton onClick={handleStrikethrough}>
                        <StrikethroughIcon />
                    </IconsButton>
                </Tooltip>

                <Tooltip text='Number list' footer='Ctrl+L'>
                    <IconsButton onClick={() => handleModals('listNum')}>
                        <ListNumbersIcon />
                    </IconsButton>
                </Tooltip>

                <Tooltip text='Blockquote' footer='Ctrl+Q'>
                    <IconsButton onClick={handleBlockquote}>
                        <TerminalIcon />
                    </IconsButton>
                </Tooltip>

                <Tooltip text='Dash list' footer='Ctrl+D'>
                    <IconsButton onClick={() => handleModals('listDash')}>
                        <ListDashIcon />
                    </IconsButton>
                </Tooltip>

                <Tooltip text='Code' footer='Ctrl+O'>
                    <IconsButton onClick={() => handleModals('code')}>
                        <BracketsIcon />
                    </IconsButton>
                </Tooltip>

                <Tooltip text='Link' footer='Ctrl+Y'>
                    <IconsButton onClick={() => handleModals('link')}>
                        <LinkIcon />
                    </IconsButton>
                </Tooltip>

                <Tooltip text='Line' footer='Ctrl+R'>
                    <IconsButton onClick={handleLine}>
                        <LineIcon />
                    </IconsButton>
                </Tooltip>

                <Tooltip text='Table' footer='Ctrl+E'>
                    <IconsButton onClick={() => handleModals('table')}>
                        <TableIcon />
                    </IconsButton>
                </Tooltip>

                <Tooltip text='Image' footer='Ctrl+M'>
                    <IconsButton onClick={() => handleModals('image')}>
                        <ImageIcon />
                    </IconsButton>
                </Tooltip>

                <Tooltip text='Check list' footer='Ctrl+P'>
                    <IconsButton onClick={() => handleModals('check')}>
                        <CheckIcon />
                    </IconsButton>
                </Tooltip>

                <Tooltip text='Add description' footer='Ctrl+F'>
                    <IconsButton onClick={() => handleModals('tag')}>
                        <SwatchesIcon />
                    </IconsButton>
                </Tooltip>

                <Tooltip text='Uppercase' footer='Ctrl+U'>
                    <IconsButton onClick={handleUppercase}>
                        <UpperIcon />
                    </IconsButton>
                </Tooltip>
            </div>

            <Modals />
            <ListenerKeydown />
        </div>
    )
}