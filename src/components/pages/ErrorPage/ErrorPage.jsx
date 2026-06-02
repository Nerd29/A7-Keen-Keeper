// import React from 'react';

const ErrorPage = ({ statusCode = 404, title = "Page Not Found", message = "Sorry, we couldn't find the page you're looking for." }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-[#244D3F] tracking-widest">
        {statusCode}
      </h1>
      <div className="bg-[#244D3F] px-2 text-sm rounded rotate-12 absolute text-white">
        Error
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="mt-4 text-gray-600 max-w-md">
          {message}
        </p>
      </div>
      <div className="mt-8">
        <a 
          href="/" 
          className="inline-block bg-[#244D3F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#244D3F] transition-colors duration-200 shadow-lg"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;