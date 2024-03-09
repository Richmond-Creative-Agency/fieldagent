export default function H2({children, ...props}) {
    return (
        <h2 className={props.className ? props.className : 'text-3xl'}>{children}</h2>
    )
}