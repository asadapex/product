import { Logo, LogoSvg } from "../../assets/icons/LogoSvg";
import { MenuIcon } from "../../assets/icons/MenuIcon";
import { ModeIcon } from "../../assets/icons/ModeIcon";
import Buttons from "../modules/button";
import NavItems from "../modules/NavItems";

const Header = () => {
  const navList = ["Products", "Customers", "Pricing", "Resources"];
  const ModeClick = () => document.body.classList.toggle("mode");
  return (
    <div className="w-full h-[80px] px-[145px] py-[19px] flex justify-between items-center">
      <a className="flex gap-[16px] items-center leading-[28px]" href="/">
        <Logo />
        <LogoSvg />
      </a>

      <div className="flex gap-[24px] items-center">
        <ul className="flex gap-[26px] leading-[28px] ">
          {navList.map((item, index) => (
            <NavItems title={item} key={index} />
          ))}
        </ul>

        <Buttons
          extraClass="!bg-transparent !text-[var(--clr-text)] !border-[#BCD0E5] border-[1px]"
          title="Sign In"
          type="button"
        />
        <Buttons title="Sign Up" type="button" />

        <MenuIcon />

        <button className="cursor-pointer" onClick={ModeClick}>
          <ModeIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
