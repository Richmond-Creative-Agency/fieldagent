import Menu from '../components/Menu';
import NavButton from '../components/NavButton';

export default function Navigation() {
  const navLinks = [
    { href: '/', title: 'Home' },
    { href: '/about', title: 'About' },
    { href: '/guide/canvass', title: 'Canvass' },
    { href: '/tool/canvassr', title: 'Canvassr' },
    { href: '/tool/emailr', title: 'Emailr' },
    { href: '/donate', title: 'Donate' },
  ];
  return (
    <header className="">
      <Menu>
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
