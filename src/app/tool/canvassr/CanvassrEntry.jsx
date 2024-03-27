import H2 from '../../ui/typography/H2';
import { useState } from 'react';
import H3 from '../../ui/typography/H3';
export default function CanvassrEntry({ entry, index, setCanvassList }) {
  const {
    first_name,
    id,
    last_name,
    phone,
    email,
    canvass_state = null,
  } = entry;

  let classes = 'p-4 col-span-3 rounded-md bg-slate-900';

  if (canvass_state === 'canvassed') {
    classes = 'p-4 col-span-3 rounded-md bg-green-900';
  }
  if (canvass_state === 'rejected') {
    classes = 'p-4 col-span-3 rounded-md bg-red-900';
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
            <p key={index}>
              {key}: {entry[key]}
            </p>
          );
        })}
      </div>

    </div>
  );
}
