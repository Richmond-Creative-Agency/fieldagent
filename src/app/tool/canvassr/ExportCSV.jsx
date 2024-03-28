import { useRef, useState } from 'react';

export default function ExportCSV({ downloadLink, makeCSV, canvassList }) {
  let [downloadName, setDownloadName] = useState('canvassr-export');
  let ref = useRef(null);
  function handleDownloadName() {
    setDownloadName(ref.current.value);
  }
  return (
    <>
      <label className="p-2" htmlFor="download-name">
        Download Name
      </label>
      <input
        id="download-name"
        ref={ref}
        className="text-slate-600 p-2 mb-2"
        onChange={handleDownloadName}
        defaultValue={downloadName}
      />

      <a
        href={downloadLink}
        className="bg-slate-800 p-2"
        download={downloadName}
        onClick={() => {
          makeCSV(canvassList);
        }}
      >
        Export CSV
      </a>
    </>
  );
}
