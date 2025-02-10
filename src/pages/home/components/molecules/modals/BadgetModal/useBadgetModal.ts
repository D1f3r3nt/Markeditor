import {LabelValueObject} from "../../../../../components/molecules/RadioButtons.tsx";
import {useEffect, useState} from "react";

export const useBadgetModal = () => {

    const GROUP_ID = "badget_type"
    const TYPES = [
        {
            label: 'Label + Msg',
            value: 'label_msg'
        },
        {
            label: 'Message',
            value: 'message'
        }
    ] as LabelValueObject[]

    const OPTIONS = [
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

    const [radioValue, setRadioValue] = useState(TYPES[0].value)
    const [styleValue, setStyleValue] = useState(OPTIONS[0].value)

    const [badgetLabel, setBadgetLabel] = useState('any text')
    const [badgetMessage, setBadgetMessage] = useState('you like')
    const [logo, setLogo] = useState('')
    const [link, setLink] = useState('')

    const [backgroundColor, setBackgroundColor] = useState('#4596ec')
    const [logoColor, setLogoColor] = useState('#000000')
    const [labelColor, setLabelColor] = useState('#ffffff')

    const [result, setResult] = useState('')

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

        if (radioValue !== 'message') {
            result += `&labelColor=${labelColor.toUpperCase().replace('#', '')}`
        }

        if (logo.trim() !== '') {
            result += `&logo=${format(logo)}&logoColor=${logoColor.toUpperCase().replace('#', '')}`
        }

        setInput(result)
        setResult(result)
    }, [
        radioValue,
        badgetMessage,
        badgetLabel,
        styleValue,
        logo,
        backgroundColor,
        logoColor,
        labelColor
    ]);

    return {
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
    };
}