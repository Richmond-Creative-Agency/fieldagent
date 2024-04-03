import H2 from '../../ui/typography/H2';
import H3 from '../../ui/typography/H3';
import { Suspense, useRef, useState } from 'react';
import {
  buttonClasses,
  inputClasses,
  redButtonClasses,
} from '@/app/ui/classes';

function Field({ entry, field, setCanvassList }) {
  const [isEditing, setIsEditing] = useState(false);

  let elementClasses = inputClasses;
  let inputRef = useRef(null);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSubmit() {
    let newEntry = { ...entry };
    newEntry[field] = inputRef.current.value;
    setIsEditing(false);
    setCanvassList(newEntry);
  }

  let element = (
    <input
      className={elementClasses}
      ref={inputRef}
      defaultValue={entry[field]}
    />
  );
  if (field === 'id') {
    element = null;
  }
  if (field === 'notes') {
    element = (
      <textarea
        className={elementClasses}
        ref={inputRef}
        defaultValue={entry[field]}
      />
    );
  }
  return (
    <>
      <p className="md:flex gap-4 justify-between">
        {field}: {entry[field]}
        {element && !isEditing && (
          <button className="mx-1" onClick={handleEdit}>
            Edit
          </button>
        )}
      </p>
      {isEditing && (
        <div className="flex flex-col">
          {element}
          <button className={buttonClasses} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </>
  );
}

export default function CanvassrEntry({ entry, index, setCanvassList }) {
  const { first_name, last_name, canvass_state = null } = entry;

  let classes = 'p-4 my-2 md:col-span-4 lg:col-span-3 rounded-md bg-primary/50';

  if (canvass_state === 'canvassed') {
    classes = 'p-4 my-2 md:col-span-4 lg:col-span-3 rounded-md bg-green/50';
  }
  if (canvass_state === 'rejected') {
    classes = 'p-4 my-2 md:col-span-4 lg:col-span-3 rounded-md bg-red/50';
  }

  function canvassContact() {
    let newEntry = { ...entry, canvass_state: 'canvassed' };
    setCanvassList(newEntry);
  }
  function rejectContact() {
    let newEntry = { ...entry, canvass_state: 'rejected' };
    setCanvassList(newEntry);
  }
  let objectKeys = Object.keys(entry);
  return (
    <div className={classes}>
      <H2>
        {first_name} {last_name}
      </H2>
      <div className="py-2">
        <H3>Fields</H3>
        {objectKeys.map((key, index) => {
          return (
            <Suspense key={key} fallback={<p>Loading Field</p>}>
              <Field
                entry={entry}
                setCanvassList={setCanvassList}
                field={key}
                index={index}
              />
            </Suspense>
          );
        })}
      </div>

      <div className="flex space-between gap-4">
        <button className={buttonClasses} onClick={canvassContact}>
          Canvassed
        </button>
        <button className={redButtonClasses} onClick={rejectContact}>
          Rejected
        </button>
      </div>
    </div>
  );
}
