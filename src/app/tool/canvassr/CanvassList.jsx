import H2 from '../../ui/typography/H2';
import P from '../../ui/typography/P';
import { Suspense } from 'react';
import CanvassrEntry from './CanvassrEntry';
import Loading from './loading';
export default function CanvassList({ canvassList, setCanvassList }) {
  //TODO: #7 Correct Grid Layout
  return (
    canvassList && (
      <div className="md:grid grid-cols-subgrid col-span-12 md:col-span-9 px-2">
        <h2 className="text-3xl mb-2 col-span-9">
          {canvassList.length} Entr{canvassList.length === 1 ? 'y' : 'ies'}
        </h2>
        {canvassList.map((item, index) => {
          return (
            <Suspense fallback={<Loading />} key={index}>
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
