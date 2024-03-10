import Link from "next/link";

export default function Button({href, children, className, ...props}) {
    let buttonClasses = 'p-3 inline-block bg-slate-800 text-xl rounded-xl'
    if( className ) {
        buttonClasses = className
    }
    return( <Link className={buttonClasses} href={href} {...props}>{children}</Link> )
}