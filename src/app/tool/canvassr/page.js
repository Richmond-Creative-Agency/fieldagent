'use client';
import { useEffect, useState, useRef } from 'react';
import Main from '../../ui/components/Main';
import H1 from '../../ui/typography/H1';
import H2 from '../../ui/typography/H2';
import CanvassForm from './CanvassForm';
import ImportCSV from './ImportCSV';
import ExportCSV from './ExportCSV';
import P from '../../ui/typography/P';
const _ = require('lodash');
function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return match[1] + '-' + match[2] + '-' + match[3];
  }
  return cleaned;
}

export default function Page() {
  const [canvassList, setCanvassList] = useState([]);
  const [activeTab, setActiveTab] = useState('Entries');
  const [downloadLink, setDownloadLink] = useState(null);
  function addEntry(data = null) {
    console.log('Adding entry');
    let newList = [];
    if (data === null || data === undefined) return;
    if (canvassList != null) {
      newList = _.uniqWith([...canvassList, { ...data }], _.isEqual);
    }

    setCanvassList(newList);
  }

  function addCSVEntries(data = null) {
    console.log('Adding entries');
    if (data === null || data === undefined) return;
    if (_.uniqWith([...canvassList, ...data], _.isEqual)) {
      console.warn(`duplicate entry in data: ${JSON.stringify(data)}`);
      return;
    }
    let newList = _.uniqWith([...canvassList, ...data], _.isEqual);
    // setCanvassList(newList)
    console.log(newList);
    setCanvassList(newList);
  }

  function makeCSV(data) {
    if (typeof data != 'object') return;
    console.log(data);
    const titleKeys = Object.keys(data[0]);
    console.log(titleKeys);
    const refinedData = [];
    refinedData.push(titleKeys);
    // console.log(refinedData);
    data.forEach((item) => {
      refinedData.push(Object.values(item));
    });
    console.log(refinedData);
    let csvContent = '';

    refinedData.forEach((row) => {
      csvContent += row.join(',') + '\n';
    });
    console.log(csvContent);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' });
    const downloadUrl = URL.createObjectURL(blob);
    setDownloadLink(downloadUrl);
  }

  let tabs = ['Entries', 'Import', 'Export'];

  return (
    <Main>
      <H1>Canvassr</H1>
      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="col-span-3 w-full">
          <menu className="flex space-between">
            {tabs.map((tab, index) => {
              return (
                <TabButton key={index} title={tab} tabAction={setActiveTab} />
              );
            })}
          </menu>
          {activeTab === 'Entries' && (
            <div>
              <H2>Add New Entry</H2>
              <CanvassForm formAction={addEntry} />
            </div>
          )}
          {activeTab === 'Import' && (
            <div>
              <H2>Import</H2>
              <ImportCSV updateEntries={addCSVEntries} />
            </div>
          )}
          {activeTab === 'Export' && (
            <div>
              <H2>Export</H2>
              <ExportCSV
                downloadLink={downloadLink}
                makeCSV={makeCSV}
                canvassList={canvassList}
              />
            </div>
          )}
        </div>
        {canvassList && (
          <div className="grid grid-cols-subgrid col-span-9 my-4">
            {canvassList.map((item, index) => {
              const { first_name, last_name, phone, email } = item;

              return (
                <div
                  className="p-4 col-span-3 rounded-md bg-slate-900"
                  key={index}
                >
                  <H2>
                    {first_name} {last_name}
                  </H2>
                  <p>ID: {index}</p>
                  <p>Email: {email}</p>
                  {phone != '' && phone != null && (
                    <p>Phone: {formatPhoneNumber(phone)} </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
        {canvassList === null && (
          <div className="col-span-9">
            <H2>No Entries</H2>
            <P>Add a new Entry!</P>
          </div>
        )}
      </div>
    </Main>
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
