import { FC } from "react";
import { ButtonType } from "../../types/ButtonType";

const Buttons: FC<ButtonType> = ({ type, title, extraClass }) => {
  return (
    <button
      type={type}
      className={`${extraClass} max-lg:hidden cursor-pointer w-[120px] py-[10px] rounded-[4px] bg-[var(--clr-light-green)] text-white font-semibold text-[16px] border-[1px] border-[var(--clr-light-green)]`}
    >
      {title}
    </button>
  );
};

export default Buttons;
