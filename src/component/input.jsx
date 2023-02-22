import React from 'react';

export default function Input({label, isError, textError, ...props}) {
    return(
        <div className="input grid">
        <label className="label" htmlFor={label}>
          {label}
        </label>
        <input {...props}  className="w-80 p-2 bg-transparent border border-pink-900 outline-none rounded-lg text-pink-900 font-bold text-center" id={label}/>
        {isError && 
        <p className="error">
         {textError}
        </p>
        }

      </div>
    )
}