import Link from 'next/link';
export default function NavButton({ children, ...props }) {
  return (
    <li>
      <Link className="p-1" {...props}>
        {children}
      </Link>
    </li>
  );
}
