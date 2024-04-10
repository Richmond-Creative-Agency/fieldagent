import Menu from '../components/Menu';
import NavButton from '../components/NavButton';

export default function Header() {
  return (
    <header className="">
      <Menu>
        <NavButton href="/">Home</NavButton>
        <NavButton href="/about">About</NavButton>
        <NavButton href="/guide/canvass">Canvass</NavButton>
        <NavButton href="/tool/canvassr">Canvassr</NavButton>
        <NavButton href="/tool/emailr">Emailr</NavButton>
        <NavButton href="/donate">Donate</NavButton>
      </Menu>
    </header>
  );
}
