'use client'
import { useState } from "react";
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
        }
    ]);
    function addEntry(data = null) {
        console.log('Adding entry');
        if( data === null || data === undefined ) return;
        let newList = [...canvassList, {...data}];

        setCanvassList(newList)
    }

    return(
        <Main>
            <H1>Canvassr</H1>
            <CanvassForm formAction={addEntry} />
            {canvassList && canvassList.map((item, index) => {
                const { firstName, lastName, phone } = item;
                return(<div key={index}>
                    <H2>{firstName} {lastName}</H2>
                    <p>Phone: {formatPhoneNumber(phone)} </p>
                    <p>ID: {index}</p>

                </div>)
            })}
        </Main>
    )
}