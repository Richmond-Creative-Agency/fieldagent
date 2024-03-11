import { forwardRef } from "react";
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

export default CanvassInput