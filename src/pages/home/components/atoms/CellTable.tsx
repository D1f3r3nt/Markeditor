interface CellTableProps {
    value: string;
    onChange: (value: string) => void;
}

export const CellTable = ({
    value,
    onChange
}: CellTableProps) => {

    return (
        <div className='border-l-[1px] border-t-[1px] border-gray-500 w-full h-full'>
            <input
                type="text"
                className={`w-full h-full bg-transparent text-center outline-none`}
                placeholder='Insert text'
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}