import H2 from '../../ui/typography/H2';
import P from '../../ui/typography/P';
import { Suspense } from 'react';
import CanvassrEntry from './CanvassrEntry';
export default function CanvassList({ canvassList, setCanvassList }) {
  return (
    canvassList && (
      <div className="grid grid-cols-subgrid col-span-9 px-2">
        <h2 className="text-3xl mb-2 col-span-9">
          {canvassList.length} Entr{canvassList.length === 1 ? 'y' : 'ies'}
        </h2>
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
