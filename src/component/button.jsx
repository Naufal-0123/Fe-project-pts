import React from 'react';

export default function Button({ title, ...props}) {
    return (
      <React.Fragment>
        <button
         {...props}
          
         className="w-80 p-2 bg-pink-900 border border-pink-900 outline-none rounded-lg text-zinc-900 font-bold text-xl"
        >
          {title}
        </button>
      </React.Fragment>
    );
  }