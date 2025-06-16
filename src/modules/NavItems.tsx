const NavItems = ({ title }) => {
  return (
    <li>
      <a
        href="#"
        className="max-xl:hidden hover:text-[var(--clr-light-green)] text-[var(--clr-text)] duration-300"
      >
        {title}
      </a>
    </li>
  );
};

export default NavItems;
