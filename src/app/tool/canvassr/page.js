'use client'
import { useState, useRef, forwardRef } from "react";
import Main from "../../ui/components/Main";
import H1 from "../../ui/typography/H1";
import H2 from "../../ui/typography/H2";

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return match[1] + '-' + match[2] + '-' + match[3];
    }
    return null;
}
const CanvassInput = forwardRef( (props, ref) => {
    function logValue(itemToLog) {
        if( itemToLog ) {
            console.log(itemToLog);
        }

    }

    return( <input {...props} ref={ref} onChange={() => {
        logValue(ref.current.value)
    }} /> )
} )


function CanvassForm({formAction}) {
    let firstNameRef = useRef(null);
    let lastNameRef = useRef(null);
    let phoneRef = useRef(null);



    return(
        <div>
            <CanvassInput ref={firstNameRef} placeholder="First Name" />
            <CanvassInput ref={lastNameRef} placeholder="Last Name" />
            <CanvassInput ref={phoneRef} placeholder="Phone Number" type="number" />
            <button onClick={()=>{formAction({
                firstName: firstNameRef.current.value ?? '',
                lastName: lastNameRef.current.value ?? '',
                phone: phoneRef.current.value ?? '',
            })}}>Submit</button>
        </div>)

}


export default function Page() {
    const [canvassList, setCanvassList] = useState([
        {
            firstName: 'John',
            lastName: 'Doe',
            phone: '1234567890',
        }
    ]);
    console.log(canvassList)
    function addEntry(data = null) {
        console.log('Adding entry');
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