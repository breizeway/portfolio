import React, { useEffect, useState } from "react";

export const Loading = ({
  isLoading,
  loadingMessage,
  isSuccess,
  successMessage,
  className,
}) => {
  const initNumDots = 3;
  const [numDots, setNumDots] = useState(initNumDots);
  const [showLoading, setShowLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const cycleDots = () => {
      if (numDots < 3) {
        setNumDots(numDots + 1);
      } else setNumDots(0);
    };

    if (isLoading) {
      setShowLoading(true);
      setTimeout(cycleDots, 400);
    } else {
      setShowLoading(false);
      clearTimeout(cycleDots);
      setNumDots(initNumDots);
    }

    return () => clearTimeout(cycleDots);
  }, [isLoading, numDots]);

  useEffect(() => {
    const deactivateSuccess = () => {
      setShowSuccess(false);
    };

    if (!isLoading && isSuccess) {
      setShowSuccess(true);
      setTimeout(deactivateSuccess, 4000);
    }

    return () => clearTimeout(deactivateSuccess);
  }, [isLoading, isSuccess]);

  return (
    <>
      {showLoading || showSuccess ? (
        <div className={className || ""}>
          {showLoading && loadingMessage + ".".repeat(numDots)}
          {showSuccess && successMessage}
        </div>
      ) : null}
    </>
  );
};
