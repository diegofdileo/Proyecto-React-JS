import "./NavBar.css";

const NavBar = ({ data }) => {
  return (
    <>
      <ul className="nav">
        {data.map((item) => (
          <li>
            <a href={item.enlace}>{item.nombre}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBar;
