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
    // TODO: #2 Error message if fields empty
    if (!newFirstName || !newLastName || !newEmail) return;
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
        <option value="VA">Virginia</option>
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
