import { useRef, useState } from 'react';
import { buttonClasses } from '@/app/ui/classes';
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
        className="text-black p-2 mb-2"
        onChange={handleDownloadName}
        defaultValue={downloadName}
      />

      <a
        href={downloadLink}
        className={buttonClasses}
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
