import Link from 'next/link';

export default function Button({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
}
