import React from "react";

const NotFound = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-gray-700 mt-4">
        The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="text-blue-500 underline mt-6"
      >
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
