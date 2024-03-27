import Header from '../header/Header';
import Link from 'next/link';
import Menu from './Menu';
import NavButton from './NavButton';
import { Suspense } from 'react';
export default function Main({ children }) {
  return (
    <div className="container mx-auto">
      <Header />

      <div className="flex w-full min-h-screen flex-col items-center justify-center p-24">
        <Suspense fallback={<p>Loading Page</p>}>{children}</Suspense>
      </div>

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
