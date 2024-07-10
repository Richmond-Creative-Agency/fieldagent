import Link from 'next/link';
export default function NavButton({ children, ...props }) {
  return (
    <li>
      <a className="p-1 hover:opacity-75" {...props}>
        {children}
      </a>
    </li>
  );
}
