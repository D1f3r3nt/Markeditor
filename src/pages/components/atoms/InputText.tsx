interface InputTextProps {
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
    label?: string;
    disabled?: boolean;
}

export const InputText = ({
    value,
    setValue,
    placeholder,
    label,
    disabled = false
}: InputTextProps) => {

    return (
        <div className='flex flex-col w-fit'>
            {
                label &&
                <label className='text-gray-400'>{label}</label>
            }
            <input
                type="text"
                className={`p-1 shadow outline-none rounded ${disabled && 'bg-gray-200 text-gray-400'}`}
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                disabled={disabled}
            />
        </div>
    )
}