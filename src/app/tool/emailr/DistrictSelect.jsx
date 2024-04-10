import { inputClasses } from '@/app/ui/classes';
export default function DistrictSelect(props) {
  const { handleChange, districts } = props;
  return (
    <div className="flex grow flex-col">
      <label>District</label>
      <select
        className={inputClasses}
        defaultValue="At Large"
        onChange={(e) => handleChange(e.target.value)}
      >
        {districts.map((district, index) => {
          if (index === 0) {
            return (
              <option key={index} value={index}>
                At Large
              </option>
            );
          }
          return (
            <option key={index} value={index}>
              {index}
            </option>
          );
        })}
      </select>
    </div>
  );
}
