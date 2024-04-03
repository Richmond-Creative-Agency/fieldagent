import { useRef } from 'react';
import H2 from '../../ui/typography/H2';
import CanvassInput from './CanvassInput';
import CanvassButton from './CanvassButton';
export default function CanvassForm({ formAction }) {
  // TODO: #1 Ref refactor this.
  let firstNameRef = useRef(null);
  let lastNameRef = useRef(null);
  let phoneRef = useRef(null);
  let emailRef = useRef(null);
  let addressRef = useRef(null);
  let cityRef = useRef(null);
  let stateRef = useRef(null);
  let noteRef = useRef(null);

  function clearInputs() {
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    emailRef.current.value = '';
    phoneRef.current.value = '';
    addressRef.current.value = '';
    cityRef.current.value = '';
    stateRef.current.selectedIndex = 0;
    noteRef.current.value = '';
  }

  function handleSubmit() {
    let newFirstName = firstNameRef.current.value.trim();
    let newLastName = lastNameRef.current.value.trim();
    let newPhone = phoneRef.current.value.trim();
    let newEmail = emailRef.current.value.trim();
    let newAddress = addressRef.current.value.trim();
    let newCity = cityRef.current.value.trim();
    let newState = stateRef.current.value.trim();
    let newNotes = noteRef.current.value.trim();

    let entry = {
      first_name: newFirstName,
      last_name: newLastName,
      phone: newPhone,
      email: newEmail,
      address: newAddress,
      city: newCity,
      state: newState,
      notes: newNotes,
    };
    if (!newFirstName || !newLastName || !newEmail)
    {
        alert("Please fill in all required fields.");
        return;
    }
    clearInputs();
    formAction(entry);
  }

  return (
    <div className="flex flex-col">
      <CanvassInput
        className="text-slate-600 p-1"
        ref={firstNameRef}
        required
        placeholder="First Name"
      />
      <CanvassInput
        className="text-slate-600 p-1"
        ref={lastNameRef}
        required
        placeholder="Last Name"
      />
      <CanvassInput
        className="text-slate-600 p-1"
        ref={emailRef}
        required
        placeholder="Email Address"
        type="email"
      />
      <CanvassInput
        className="text-slate-600 p-1"
        ref={phoneRef}
        placeholder="Phone Number"
        type="number"
      />
      <CanvassInput
        className="text-slate-600 p-1"
        ref={addressRef}
        placeholder="Address Line 1"
        type="text"
      />
      <CanvassInput
        className="text-slate-600 p-1"
        ref={cityRef}
        placeholder="City"
        type="text"
      />
      <select className="text-slate-600 p-1" ref={stateRef}>
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
        ref={noteRef}
        placeholder="Notes Here"
        cols="10"
        rows="10"
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
