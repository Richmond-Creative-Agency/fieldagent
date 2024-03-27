export default function CanvassButton({ children, ...props }) {
  const { className = null } = props;
  let classes = 'bg-slate-800 p-2';
  if (className) {
    classes = className;
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
