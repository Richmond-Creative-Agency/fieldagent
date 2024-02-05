export default function Input({...props}) {
    return(
        <div className="py-2">
            <input className="p-2 rounded-sm text-gray-800" {...props} />
        </div>

    );
}