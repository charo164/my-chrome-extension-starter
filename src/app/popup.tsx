import ReactDom from 'react-dom';
import React from 'react';

const Popup = () => {
  return (
    <div className="flex flex-col p-4 justify-center items-center bg-gray-800 w-72 h-screen">
      <h1 className="p-4 text-lg text-white">My extension</h1>
      <p className="p-2 text-white">
        change it to{' '}
        <code className="font-medium p-1 bg-gray-600 rounded">/src/app/popup.tsx</code>
      </p>
    </div>
  );
};

ReactDom.render(<Popup />, document.querySelector('#root'));
