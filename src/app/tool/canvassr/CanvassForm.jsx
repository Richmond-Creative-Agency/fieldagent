import { useState } from 'react';
import CanvassButton from './CanvassButton';
import CanvassStateSelect from './CanvassStateSelect';
import { inputClasses } from '@/app/ui/classes';

const formPlaceHolders = {
  'First Name': 'first_name',
  'Last Name': 'last_name',
  'Email Address': 'email',
  'Phone Number': 'phone',
  'Address Line 1': 'address',
  City: 'city',
};

const initialFormData = {
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  state: '',
  notes: '',
};

export default function CanvassForm({ formAction }) {
  const [formData, setFormData] = useState(initialFormData);

  function clearInputs() {
    setFormData(initialFormData);
  }

  function handleSubmit() {
    const entry = formData;
    if (!entry.first_name || !entry.last_name || !entry.email) {
      alert('Please fill in name and email fields, they are required.');
      return;
    }
    console.log(formData);
    formAction(entry);
    clearInputs();
  }

  return (
    <div className="flex flex-col">
      {Object.keys(formPlaceHolders).map((item) => (
        <input
          className={inputClasses}
          name={item}
          key={item}
          placeholder={item}
          value={formData[formPlaceHolders[item]]}
          onChange={(e) => {
            setFormData({
              ...formData,
              [formPlaceHolders[item]]: e.target.value,
            });
          }}
        />
      ))}
      <CanvassStateSelect
        className={inputClasses}
        value={formData.state}
        onChange={(e) => {
          setFormData({ ...formData, state: e.target.value });
        }}
      />

      <textarea
        className={inputClasses}
        placeholder="Notes Here"
        cols="10"
        rows="10"
        value={formData.notes}
        onChange={(e) => {
          setFormData({ ...formData, notes: e.target.value });
        }}
      ></textarea>

      <CanvassButton
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </CanvassButton>
    </div>
  );
}
