
import {useRef, useState} from "react"
export default function ExportCSV({downloadLink, makeCSV, canvassList}) {
    let [downloadName, setDownloadName] = useState('canvassr-export')
    let ref = useRef(null);
    function handleDownloadName() {
        setDownloadName(ref.current.value)
    }
    return (
        <div>
                <h2>Export</h2>
                <input ref={ref} onChange={handleDownloadName} defaultValue={downloadName} />
                <a href={downloadLink} download={downloadName} onClick={() => {
                makeCSV(canvassList);
                }}>Export CSV</a>
            </div>
    )
}