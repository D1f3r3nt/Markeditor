import {ModalButtons} from "../../atoms/ModalButtons.tsx";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useEffect, useState} from "react";
import {RadioButtons, LabelValueObject} from "../../../../components/molecules/RadioButtons.tsx";
import {InputText} from "../../../../components/atoms/InputText.tsx";
import {Dropdown} from "../../../../components/atoms/Dropdown.tsx";
import {ColorPicker} from "../../../../components/atoms/ColorPicker.tsx";

export const BadgetModal =  () => {

    const groupId = "badget_type"
    const types = [
        {
            label: 'Label + Msg',
            value: 'label_msg'
        },
        {
            label: 'Message',
            value: 'message'
        }
    ] as LabelValueObject[]

    const options = [
        {
            label: 'Flat',
            value: 'flat'
        },
        {
            label: 'Flat Square',
            value: 'flat-square'
        },
        {
            label: 'Plastic',
            value: 'plastic'
        },
        {
            label: 'For the badge',
            value: 'for-the-badge'
        },
        {
            label: 'Social',
            value: 'social'
        }
    ] as LabelValueObject[]

    const [input, setInput] = useState('')

    const [radioValue, setRadioValue] = useState(types[0].value)
    const [styleValue, setStyleValue] = useState(options[0].value)

    const [badgetLabel, setBadgetLabel] = useState('any text')
    const [badgetMessage, setBadgetMessage] = useState('you like')
    const [backgroundColor, setBackgroundColor] = useState('#4596ec')

    const format = (value: string) => {
        return value.replace(' ', '%20').replace('_', '__').replace('-', '--')
    }

    useEffect(() => {
        let result = ''

        if (radioValue === 'message') {
            result = `${format(badgetMessage)}`
        } else {
            result = `${format(badgetLabel)}-${format(badgetMessage)}`
        }

        result += `-${backgroundColor.toUpperCase().replace('#', '')}?style=${styleValue}`

        setInput(result)
    }, [
        radioValue,
        badgetMessage,
        badgetLabel,
        styleValue,
        backgroundColor
    ]);

    const handleSubmitBadget = () => {

    }

    return (
        <>
            <div className='h-[400px] w-[800px] mb-2 grid grid-cols-4'>
                <div className='border-r-[1px] border-gray-200 col-span-3 flex flex-col items-center gap-y-2'>
                    <RadioButtons groupId={groupId} value={radioValue} labels={types} setValue={setRadioValue}/>

                    <div className='flex flex-row justify-around w-full'>
                        <InputText value={badgetLabel} setValue={setBadgetLabel} label='Label' disabled={radioValue === 'message'}/>
                        <InputText value={badgetMessage} setValue={setBadgetMessage} label='Message' />
                    </div>

                    <div className='flex flex-row justify-around w-full'>
                        <Dropdown label='Style' options={options} value={styleValue} setValue={setStyleValue}/>
                        <ColorPicker label='Background Color' value={backgroundColor} setValue={setBackgroundColor}/>
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