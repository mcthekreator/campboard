import React from 'react';

type LoaderType = 'dots' | 'bars' | 'ring';

interface LoaderProps {
  loaderType?: LoaderType;
}

const Loader: React.FC<LoaderProps> = ({ loaderType = 'bars' }) => {
  return (
    <div className="flex justify-center items-center h-24">
      {loaderType === 'dots' && (
        <div className="flex w-20 justify-between">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-4 h-4 bg-purple-primary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      )}

      {loaderType === 'bars' && (
        <div className="flex w-16 justify-between">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2.5 h-10 bg-purple-primary animate-grow"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      )}

      {loaderType === 'ring' && (
        <div className="w-20 h-20 border-4 border-purple-primary border-t-transparent rounded-full animate-spin" />
      )}
    </div>
  );
};

export default Loader;
