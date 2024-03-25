export default function H3({ children, ...props }) {
  return (
    <h3 className={props.className ? props.className : 'text-2xl mb-2'}>
      {children}
    </h3>
  );
}
