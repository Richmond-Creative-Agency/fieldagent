import Menu from '../components/Menu';
import NavButton from '../components/NavButton';

export default function Header() {
  return (
    <header className="">
      <Menu>
        <NavButton to="/" href="/">
          Home
        </NavButton>
        <NavButton to="/about" href="/about">
          About
        </NavButton>
        <NavButton to="/guide/canvass" href="/guide/canvass">
          Canvass
        </NavButton>
        <NavButton to="/tool/canvassr" href="/tool/canvassr">
          Canvassr
        </NavButton>
        <NavButton to="/donate" href="/donate">
          Donate
        </NavButton>
      </Menu>
    </header>
  );
}
