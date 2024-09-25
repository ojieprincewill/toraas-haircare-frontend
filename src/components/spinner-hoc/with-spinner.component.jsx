import React, { useEffect, useState } from "react";
import Spinner from "./spinner.component";

const WithSpinner = (WrappedComponent) => {
  const WithLoadingSpinner = (props) => {
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
      const simulateLoad = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setPageLoaded(true);
      };

      simulateLoad();

      return () => {
        setPageLoaded(false);
      };
    }, []);

    return (
      <div>{pageLoaded ? <WrappedComponent {...props} /> : <Spinner />}</div>
    );
  };

  return WithLoadingSpinner;
};

export default WithSpinner;
