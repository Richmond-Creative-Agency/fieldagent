import H2 from '../../ui/typography/H2';
import H3 from '../../ui/typography/H3';
import { Suspense, useRef, useState } from 'react';

function Field({ entry, field, setCanvassList }) {
  const [isEditing, setIsEditing] = useState(false);

  let elementClasses = 'text-slate-600 p-2';
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
        {element && !isEditing && <button onClick={handleEdit}>Edit</button>}
      </p>
      {isEditing && (
        <div className="flex flex-col">
          {element}
          <button className="bg-slate-800 p-2" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </>
  );
}

export default function CanvassrEntry({ entry, index, setCanvassList }) {
  const { first_name, last_name, canvass_state = null } = entry;

  let classes = 'p-4 my-2 md:col-span-4 lg:col-span-3 rounded-md bg-slate-900';

  if (canvass_state === 'canvassed') {
    classes = 'p-4 my-2 md:col-span-4 lg:col-span-3 rounded-md bg-green-900';
  }
  if (canvass_state === 'rejected') {
    classes = 'p-4 my-2 md:col-span-4 lg:col-span-3 rounded-md bg-red-900';
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
        <button className="p-2 bg-green-500" onClick={canvassContact}>
          Canvassed
        </button>
        <button className="p-2 bg-pink-500" onClick={rejectContact}>
          Rejected
        </button>
      </div>
    </div>
  );
}
