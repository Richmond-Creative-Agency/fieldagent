'use client';
import { useState, Suspense } from 'react';
import CanvassList from './CanvassList';
import Tabs from './Tabs';
const _ = require('lodash');

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return match[1] + '-' + match[2] + '-' + match[3];
  }
  return cleaned;
}
export default function Canvassr({ children }) {
  const [canvassList, setCanvassList] = useState([]);

  const [downloadLink, setDownloadLink] = useState(null);
  function addEntry(data = null) {
    console.log('Adding entry');
    let newList = [];
    if (data === null || data === undefined) return;
    if (canvassList != null) {
      newList = _.uniqWith(
        [
          ...canvassList,
          { id: canvassList.length, ...data, canvass_state: null },
        ],
        _.isEqual,
      );
    }

    setCanvassList(newList);
  }
  function editEntry(data = null) {
    console.log('Editing entry');
    let newList = [];
    if (data === null || data === undefined) return;
    // console.log(data.id);
    if (canvassList != null) {
      newList = [...canvassList];
      newList[data.id] = { ...data };
    }

    setCanvassList(newList);
  }
  function addCSVEntries(data = null) {
    console.log('Adding entries');
    if (data === null || data === undefined) return;

    let newList = [...data];
    // setCanvassList(newList)
    console.log(newList);
    setCanvassList(newList);
  }

  function makeCSV(data) {
    if (typeof data != 'object') return;
    if (data.length === 0) {
      console.error('No Data');
      return;
    }
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

  return (
    <>
      <Suspense>
        <div className="grid grid-cols-12 gap-4 w-full">
          <Tabs
            addEntry={addEntry}
            downloadLink={downloadLink}
            makeCSV={makeCSV}
            canvassList={canvassList}
            addCSVEntries={addCSVEntries}
          />

          <CanvassList canvassList={canvassList} setCanvassList={editEntry} />
          {children}
        </div>
      </Suspense>
    </>
  );
}
