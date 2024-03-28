export default function H1({ children, ...props }) {
  return (
    <h1 className={props.className ? props.className : 'text-5xl mb-2'}>
      {children}
    </h1>
  );
}
