import Header from '../header/Header';
import Link from 'next/link';
import Menu from './Menu';
import NavButton from './NavButton';
import { Suspense } from 'react';
export default function Main({ children }) {
  return (
    <div className="container mx-auto min-h-svh">
      <Header />

      <Suspense fallback={<p>Loading Page</p>}>
        <main>{children}</main>
      </Suspense>

      <footer>
        <Menu>
          <NavButton href="http://richmondcreative.agency">
            Richmond Creative Agency LLC
          </NavButton>
        </Menu>
      </footer>
    </div>
  );
}
