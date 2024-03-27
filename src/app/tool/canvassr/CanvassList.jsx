import H2 from '../../ui/typography/H2';
import P from '../../ui/typography/P';
import { Suspense } from 'react';
import CanvassrEntry from './CanvassrEntry';
export default function CanvassList({ canvassList, setCanvassList }) {
  return (
    canvassList && (
      <div className="grid grid-cols-subgrid col-span-9 my-4">
        {canvassList.map((item, index) => {
          return (
            <Suspense key={index}>
              <CanvassrEntry
                entry={item}
                setCanvassList={setCanvassList}
                index={index}
              />
            </Suspense>
          );
        })}
        {canvassList.length === 0 && (
          <div className="col-span-9">
            <H2>No Entries</H2>
            <P>Add a new Entry!</P>
          </div>
        )}
      </div>
    )
  );
}
