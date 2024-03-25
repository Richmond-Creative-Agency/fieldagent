import { useRef } from 'react';
import H2 from '../../ui/typography/H2';
export default function ImportCSV({ updateEntries }) {
  let csvRef = useRef(null);
  function importCSV() {
    console.log('Beginning Import');
    let reader = new FileReader();
    if (csvRef.current.files[0] === undefined) {
      console.error('No CSV file');
      return;
    }

    reader.readAsText(csvRef.current.files[0]);

    reader.onload = (event) => {
      console.log('Reading CSV');
      let csv = event.target.result;
      let [tableHeaders, ...rows] = csv
        .trim()
        .split('\n')
        .map((row) => row.split(','));
      const tableObject = rows.map((item) => {
        const object = {};
        tableHeaders.forEach((key, index) => {
          object[key] = item.at(index);
        });
        return object;
      });
      console.log('CSV Read: ' + JSON.stringify(tableObject));
      updateEntries(tableObject);
    };
  }
  return (
    <>
      <label htmlFor="import-csv" className="p-2">
        Import CSV
      </label>

      <input
        id="import-csv"
        className="p-2 bg-slate-800"
        ref={csvRef}
        type="file"
        accept=".csv"
      />
      <button className="p-2 bg-slate-800" onClick={importCSV}>
        Submit
      </button>
    </>
  );
}
