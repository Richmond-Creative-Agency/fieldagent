import { useRef, useState } from 'react';
import H2 from '../../ui/typography/H2';
import H3 from '../../ui/typography/H3';
export default function ExportCSV({ downloadLink, makeCSV, canvassList }) {
  let [downloadName, setDownloadName] = useState('canvassr-export');
  let ref = useRef(null);
  function handleDownloadName() {
    setDownloadName(ref.current.value);
  }
  return (
    <>
      <div>
        <label className="p-2" for="download-name">
          Download Name
        </label>
        <input
          id="download-name"
          ref={ref}
          className="text-slate-600 p-2"
          onChange={handleDownloadName}
          defaultValue={downloadName}
        />
      </div>

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
