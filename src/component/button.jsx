import React from 'react';

export default function Button({ title, ...props}) {
    return (
      <React.Fragment>
        <button
         {...props}
          
         className="w-80 p-2 bg-orange-400 outline-none rounded-lg text-white font-bold text-xl"
        >
          {title}
        </button>
      </React.Fragment>
    );
  }