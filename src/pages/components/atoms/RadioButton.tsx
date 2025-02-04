interface RadioButtonProps {
    groupId: string;
    value: string;
    checked: boolean;
    label?: string;
    onClick: () => void;
}

export const RadioButton = ({
    groupId,
    value,
    checked,
    label,
    onClick,
} : RadioButtonProps) => {

    return (
        <div className='flex flex-row gap-x-1 place-items-center rounded hover:bg-gray-200 [&>*]:hover:cursor-pointer p-1'>
            <input
                type="radio"
                id={value}
                name={groupId}
                value={value}
                checked={checked}
                onClick={onClick}
                className='h-5 w-5 cursor-pointer border-slate-300 checked:border-slate-400 transition-all accent-[#242424]'
            />

            <label
                htmlFor={value}
            >
                {label ?? value}
            </label>
        </div>
    );
}