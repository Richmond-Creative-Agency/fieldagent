import CanvassForm from './CanvassForm';
import ImportCSV from './ImportCSV';
import ExportCSV from './ExportCSV';
import H2 from '../../ui/typography/H2';
import { useState } from 'react';

import { Suspense } from 'react';

export default function Tabs({ children, ...props }) {
  const [activeTab, setActiveTab] = useState('Entries');
  const { addEntry, downloadLink, makeCSV, canvassList, addCSVEntries } = props;
  let tabs = ['Entries', 'Import', 'Export'];

  let tabClasses = 'my-2';

  return (
    <Suspense fallback={<p>Loading Tabs</p>}>
      <div className="col-span-12 md:col-span-6 lg:col-span-3 w-full">
        <menu className="flex space-between">
          {tabs.map((tab, index) => {
            return (
              <TabButton key={index} title={tab} tabAction={setActiveTab} />
            );
          })}
        </menu>
        {activeTab === 'Entries' && (
          <div className={tabClasses}>
            <H2>Add New Entry</H2>
            <CanvassForm formAction={addEntry} />
          </div>
        )}
        {activeTab === 'Import' && (
          <div className={tabClasses}>
            <H2>Import</H2>
            <ImportCSV updateEntries={addCSVEntries} />
          </div>
        )}
        {activeTab === 'Export' && (
          <div className={tabClasses}>
            <H2>Export</H2>
            <ExportCSV
              downloadLink={downloadLink}
              makeCSV={makeCSV}
              canvassList={canvassList}
            />
          </div>
        )}
      </div>
    </Suspense>
  );
}
function TabButton({ title, tabAction }) {
  let buttonClasses = 'p-2 bg-slate-600 ';
  return (
    <>
      <li>
        <button
          className={buttonClasses}
          onClick={() => {
            tabAction(title);
          }}
        >
          {title}
        </button>
      </li>
    </>
  );
}
