import { buttonClasses } from '@/app/ui/classes.js';
export default function CanvassButton({ children, ...props }) {
  const { className = null } = props;
  // TODO: #3 Need button hover, active, focus state.
  let classes = buttonClasses;
  if (className) {
    classes = className;
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
