import './style.css';

const Header = ({ color, children }) => (
  <header className={color && `background--${color}`}>
    { children || 'Arcotech' }
  </header>
);

export default Header;