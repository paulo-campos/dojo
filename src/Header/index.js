import "./style.css";

const Header = ({ title, color }) => {
  return <header className={color}>{title}</header>;
};

export default Header;
