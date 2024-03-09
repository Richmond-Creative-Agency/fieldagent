import Link from "next/link"
export default function NavButton({href, children}) {
    return(<li>
        <Link className="p-1" href={href}>{children}</Link>
    </li>)
}