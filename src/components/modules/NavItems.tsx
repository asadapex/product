const NavItems = ({ title }) => {
  return (
    <li>
      <a
        href="#"
        className="hover:text-[var(--clr-light-green)] text-[var(--clr-text)] duration-300"
      >
        {title}
      </a>
    </li>
  );
};

export default NavItems;
