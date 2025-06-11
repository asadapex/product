import { FC } from "react";
import { ButtonType } from "../../types/ButtonType";

const Buttons: FC<ButtonType> = ({ type, title, extraClass }) => {
  return (
    <button
      type={type}
      className={`${extraClass} cursor-pointer py-[10px] px-[24px] rounded-[4px] bg-[var(--clr-light-green)] text-white font-semibold text-[16px] border-[1px] border-[var(--clr-light-green)]`}
    >
      {title}
    </button>
  );
};

export default Buttons;
