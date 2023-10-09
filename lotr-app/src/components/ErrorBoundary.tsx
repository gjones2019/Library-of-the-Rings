import React, { useState, useEffect, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (
      error: Event | string,
      source?: string,
      lineno?: number,
      colno?: number,
      errorObj?: Error
    ) => {
      console.error("Error:", error, source, lineno, colno, errorObj);
      setHasError(true);
    };

    window.onerror = handleError;

    return () => {
      window.onerror = null;
    };
  }, []);

  if (hasError) {
    return (
      <div>
        <h2>Something went wrong.</h2>
        <p>Please try again later.</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
