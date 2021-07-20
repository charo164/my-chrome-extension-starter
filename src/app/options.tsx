import ReactDom from 'react-dom';
import React from 'react';

const Options = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-800 w-full h-screen">
      <h1 className="p-4 text-lg text-white">Options page</h1>
      <p className="p-2 text-white">
        change it to <code className="font-medium p-1 bg-gray-600 rounded">/src/app/option.tsx</code>
      </p>
    </div>
  );
};

ReactDom.render(<Options />, document.querySelector('#root'));
