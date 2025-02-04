import {RadioButton} from "../atoms/RadioButton.tsx";

interface RadioButtonsProps {
    groupId: string;
    value: string;
    setValue: (value: string) => void;
    labels: LabelValueObject[];
}

export interface LabelValueObject {
    label: string;
    value: string;
}

export const RadioButtons = ({
    groupId,
    setValue,
    value,
    labels
}: RadioButtonsProps) => {

    return (
        <div className={'flex flex-row px-3 py-2 gap-x-3 w-fit shadow rounded justify-around items-center'}>
            {
                labels.map((label) => (
                    <RadioButton
                        groupId={groupId}
                        value={label.value}
                        label={label.label}
                        checked={value === label.value}
                        onClick={() => setValue(label.value)}/>
                ))
            }
        </div>
    )
}