import React from 'react';
import { Link } from 'react-router-dom';

const UnauthorizedPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-red-600 mb-2">403</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Unauthorized Access
          </h2>
          <p className="text-gray-600 mb-6">
            You don't have the required permissions to access this page.
            Please contact your administrator if you believe this is an error.
          </p>
        </div>

        <div className="space-y-3">
          <Link
            to="/"
            className="block w-full py-2 px-4 bg-purple-primary text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Back to Login
          </Link>

          <button
            onClick={() => window.history.back()}
            className="block w-full py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
