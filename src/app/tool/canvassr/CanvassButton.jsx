export default function CanvassButton({children, ...props}) {
    return(<button className="bg-slate-800 p-2" {...props}>{children}</button>)
}