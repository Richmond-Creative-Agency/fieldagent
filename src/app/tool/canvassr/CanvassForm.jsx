import { useState } from 'react';
import CanvassButton from './CanvassButton';

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
          className="text-slate-600 p-1"
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
      <select
        className="text-slate-600 p-1"
        value={formData.state}
        onChange={(e) => {
          setFormData({ ...formData, state: e.target.value });
        }}
      >
        <option value="">State</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
      <textarea
        className="text-slate-600 p-1"
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
