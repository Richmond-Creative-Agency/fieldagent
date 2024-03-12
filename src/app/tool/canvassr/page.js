'use client'
import { useEffect, useState } from "react";
import Main from "../../ui/components/Main";
import H1 from "../../ui/typography/H1";
import H2 from "../../ui/typography/H2";
import CanvassForm from "./CanvassForm";

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return match[1] + '-' + match[2] + '-' + match[3];
    }
    return cleaned;
}

export default function Page() {
    const [canvassList, setCanvassList] = useState([
        {
            firstName: 'John',
            lastName: 'Doe',
            phone: '1234567890',
            email: null,
        }
    ]);

    const [downloadLink, setDownloadLink] = useState(null);

    function addEntry(data = null) {
        console.log('Adding entry');
        if( data === null || data === undefined ) return;
        let newList = [...canvassList, {...data}];

        setCanvassList(newList)
    }

    function makeCSV(data) {
        if( typeof data != 'object') return;
        console.log(data);
        const titleKeys = Object.keys(data[0]);
        const refinedData = [];
        refinedData.push(titleKeys);
        // console.log(refinedData);
        data.forEach( item => {
            refinedData.push(Object.values(item));
        })
        console.log(refinedData);
        let csvContent = '';

        refinedData.forEach( row => {
            csvContent += row.join(',') + '\n';
        })
        console.log(csvContent);
        const blob = new Blob([csvContent], {type: 'text/csv;charset=utf-8,'});
        const downloadUrl = URL.createObjectURL(blob);
        window.open(downloadUrl)
    }

    return(
        <Main>

            <H1>Canvassr</H1>
            <CanvassForm formAction={addEntry} />
            <div className="grid grid-cols-3 my-4 gap-4">
                {canvassList && canvassList.map((item, index) => {
                    const { firstName, lastName, phone, email } = item;
                    return(<div className="p-4 rounded-md bg-slate-900" key={index}>
                        <H2>{firstName} {lastName}</H2>
                        <p>Email: {email}</p>
                        <p>Phone: {formatPhoneNumber(phone)} </p>
                        <p>ID: {index}</p>

                    </div>)
                })}
            </div>
            <button onClick={() => {
                makeCSV(canvassList);
            }}>Export CSV</button>
        </Main>
    )
}