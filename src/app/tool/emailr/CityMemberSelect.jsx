import { inputClasses } from '@/app/ui/classes';
export default function cityMemberSelect(props) {
  const { handleChange, selectValues } = props;
  return (
    <div className="flex grow flex-col">
      <label htmlFor="city-member">City Member to Contact</label>
      <select
        id="city-member"
        className={inputClasses}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      >
        {Object.keys(selectValues).map((value) => {
          return (
            <option value={selectValues[value]} key={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
}
