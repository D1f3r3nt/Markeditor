import {ModalButtons} from "../../../atoms/ModalButtons.tsx";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useContext } from "react";
import {RadioButtons } from "../../../../../components/molecules/RadioButtons.tsx";
import {InputText} from "../../../../../components/atoms/InputText.tsx";
import {Dropdown} from "../../../../../components/atoms/Dropdown.tsx";
import {ColorPicker} from "../../../../../components/atoms/ColorPicker.tsx";
import {DataContext} from "../../../../DataProvider.tsx";
import {useButtons} from "../../../../utils/useButtons.ts";
import {useBadgetModal} from "./useBadgetModal.ts";

export const BadgetModal =  () => {

    const { requestModal, input: generalInput, setInput: setGeneralInput, setModalOpen, setRequestModal } = useContext(DataContext)
    const { setStartLine } = useButtons(generalInput, setGeneralInput, setModalOpen, setRequestModal)

    const {
        GROUP_ID,
        TYPES,
        OPTIONS,

        input,
        link,
        result,
        radioValue,
        badgetLabel,
        labelColor,
        badgetMessage,
        logo,
        logoColor,
        styleValue,
        backgroundColor,

        setRadioValue,
        setBadgetLabel,
        setLabelColor,
        setBackgroundColor,
        setLogo,
        setLogoColor,
        setLink,
        setBadgetMessage,
        setStyleValue,
    } = useBadgetModal()

    const handleSubmitBadget = () => {
        let value = `![Custom badget](https://img.shields.io/badge/${result})`

        if (link !== '') {
            value = `[${value}](${link})`
        }

        setGeneralInput(setStartLine(requestModal?.cursor ?? 0, value))
    }

    return (
        <>
            <div className='h-[400px] w-[800px] mb-2 grid grid-cols-4'>
                <div className='border-r-[1px] border-gray-200 col-span-3 flex flex-col items-center justify-around'>
                    <RadioButtons groupId={GROUP_ID} value={radioValue} labels={TYPES} setValue={setRadioValue}/>

                    <div className='flex flex-row justify-around w-full'>
                        <InputText value={badgetLabel} setValue={setBadgetLabel} label='Label'
                                   disabled={radioValue === 'message'}/>
                        <InputText value={badgetMessage} setValue={setBadgetMessage} label='Message'/>
                    </div>

                    <div className='flex flex-row justify-around w-full'>
                        <Dropdown label='Style' options={OPTIONS} value={styleValue} setValue={setStyleValue}/>
                        <ColorPicker label='Background Color' value={backgroundColor} setValue={setBackgroundColor}/>
                    </div>

                    <div className='flex flex-row justify-around w-full'>
                        <InputText value={logo} setValue={setLogo} label='Logo' link={'https://simpleicons.org/'}/>
                        <ColorPicker label='Logo Color' value={logoColor} setValue={setLogoColor}/>
                    </div>

                    <div className='flex flex-row justify-around w-full'>
                        <InputText value={link} setValue={setLink} label='Link'/>
                        <ColorPicker label='Label Color' value={labelColor} setValue={setLabelColor}/>
                    </div>

                </div>
                <div>
                    <Markdown
                        children={`![Custom badget](https://img.shields.io/badge/${input})`}
                        remarkPlugins={[remarkGfm]}
                        className='markdown flex justify-center items-center'
                    />
                </div>
            </div>

            <ModalButtons handleSubmit={ handleSubmitBadget } />
        </>
    );
}