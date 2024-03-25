import Header from '../header/Header';
import Link from 'next/link';
import Menu from './Menu';
import NavButton from './NavButton';
export default function Main({ children }) {
  return (
    <>
      <Header />
      <div className="flex w-full min-h-screen flex-col items-center justify-center p-24">
        {children}
      </div>
      <footer>
        <Menu>
          <NavButton href="http://richmondcreative.agency">
            Richmond Creative Agency LLC
          </NavButton>
        </Menu>
      </footer>
    </>
  );
}
