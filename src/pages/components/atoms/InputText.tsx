interface InputTextProps {
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    link?: string;
}

export const InputText = ({
    value,
    setValue,
    placeholder,
    label,
    disabled = false,
    link
}: InputTextProps) => {

    return (
        <div className='flex flex-col w-fit'>
            {
                label &&
                <div className='flex flex-row gap-x-1 justify-start items-center'>
                    <label className='text-gray-400'>{label}</label>
                    {
                        link &&
                        <a href={link} target={link} className='text-blue-400'>Icons</a>
                    }
                </div>
            }
            <input
                type="text"
                className={`p-1 shadow outline-none rounded mt-1 ${disabled && 'bg-gray-200 text-gray-400'}`}
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                disabled={disabled}
            />
        </div>
    )
}