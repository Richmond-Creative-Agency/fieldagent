export default function CanvassButton({ children, ...props }) {
  const { className = null } = props;
  // TODO: #3 Need button hover, active, focus state.
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
