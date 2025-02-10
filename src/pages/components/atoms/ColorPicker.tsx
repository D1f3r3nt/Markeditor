interface ColorPickerProps {
    label?: string;
    value: string;
    setValue: (value: string) => void;
}

export const ColorPicker = ({
    label,
    value,
    setValue
}: ColorPickerProps) => {

    return (
        <div className='flex flex-col w-[193px]'>
            {
                label &&
                <label className='text-gray-400'>{label}</label>
            }
            <div className='flex flex-row gap-x-1'>
                <input
                    type="color"
                    onChange={(e) => setValue(e.target.value)}
                    className={`p-2 shadow outline-none rounded w-[36px] bg-white cursor-pointer`}
                    value={value}
                />

                <input
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                    className={`p-1 shadow outline-none rounded w-full bg-white cursor-pointer`}
                    value={value}
                />
            </div>

        </div>
    )
}