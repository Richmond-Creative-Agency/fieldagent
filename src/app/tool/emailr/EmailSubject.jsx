import { inputClasses } from '@/app/ui/classes';
export default function EmailSubject(props) {
  const { handleChange, subject } = props;
  return (
    <>
      <label htmlFor="subject">Subject</label>
      <input
        className={inputClasses}
        id="subject"
        defaultValue={subject}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
}
