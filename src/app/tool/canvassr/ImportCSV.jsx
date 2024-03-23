import { useRef } from "react";
export default function ImportCSV({updateEntries}) {
    let csvRef = useRef(null)
    function importCSV() {
        console.log('Beginning Import')
        let reader = new FileReader();
        if(csvRef.current.files[0] === undefined) {
            console.error('No CSV file')
            return
        }

        reader.readAsText(csvRef.current.files[0]);

        reader.onload = (event) => {
            console.log('Reading CSV');
            let csv = event.target.result;
            let [tableHeaders, ...rows] = csv.trim().split('\n').map( row => row.split(',') );
            const tableObject = rows.map(
                (item) => {
                    const object = {};
                    tableHeaders.forEach((key,index) => {
                        object[key] = item.at(index)
                    });
                    return object;
                }
            )
            console.log('CSV Read: ' + JSON.stringify(tableObject))
            updateEntries(tableObject);
        }
    }
    return (<div>
    <h2>Import</h2>
    <input ref={csvRef} type="file" accept=".csv" />
    <button onClick={importCSV}>Submit</button>
</div>)
}