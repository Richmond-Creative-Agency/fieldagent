import Menu from '../components/Menu';
import NavButton from '../components/NavButton';
import FaLogo from '../components/fa-logo-white';

export default function Navigation() {
  const navLinks = [
    { href: '/about', title: 'About' },
    { href: '/guide/canvass', title: 'Canvass' },
    { href: '/tool/canvassr', title: 'Canvassr' },
    { href: '/tool/emailr', title: 'Emailr' },
    { href: '/donate', title: 'Donate' },
  ];
  return (
    <header className="">
      <Menu>
        <li>
          <a href="/">
            <FaLogo className="p-1 hover:opacity-75" width="50px" />
          </a>
        </li>

        {navLinks.map((navLink, index) => {
          return (
            <NavButton key={index} href={navLink.href}>
              {navLink.title}
            </NavButton>
          );
        })}
      </Menu>
    </header>
  );
}
