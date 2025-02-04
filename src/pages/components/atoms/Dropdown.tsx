import {LabelValueObject} from "../molecules/RadioButtons.tsx";

interface DropdownProps {
    label?: string;
    options: LabelValueObject[];
    value: string;
    setValue: (value: string) => void;
}

export const Dropdown = ({
    label,
    options,
    value,
    setValue
}: DropdownProps) => {



    return (
        <div className='flex flex-col w-[193px]'>
            {
                label &&
                <label className='text-gray-400'>{label}</label>
            }
            <select
                name="cars"
                id="cars"
                value={value}
                className='p-1 shadow rounded bg-white cursor-pointer'
            >
                {
                    options.map((option) => (
                        <option
                            value={option.value}
                            onClick={() => setValue(option.value)}
                            className='cursor-pointer'
                        >
                            {option.label}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}