interface IconsButton {
    children: React.ReactNode;
    onClick?: () => void;
}

export const IconsButton = ({ children, onClick }: IconsButton) => {


    return (
      <div
          className={
          `[&>*]:fill-[#242424] [&>*>*]:fill-[#242424] [&>*]:hover:fill-[#FFFFFFED] [&>*>*]:hover:fill-[#FFFFFFED] hover:cursor-pointer bg-[#9095a0] hover:scale-105
          border-[#9095a0] border-[1px] p-1 h-[30px] w-[30px] flex justify-center items-center rounded`
        }
          onClick={onClick}
      >
        {children}
      </div>
    )
}