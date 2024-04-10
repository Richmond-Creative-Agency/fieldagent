import { inputClasses } from '@/app/ui/classes';
import { forwardRef } from 'react';
export default function EmailBody(props) {
  const { emailBody, handleChange } = props;
  return (
    <>
      <label htmlFor="email-body">Email Body</label>
      <textarea
        cols="10"
        rows="10"
        className={inputClasses}
        onChange={(e) => handleChange(e.target.value)}
        id="email-body"
        defaultValue={emailBody}
      />
    </>
  );
}
