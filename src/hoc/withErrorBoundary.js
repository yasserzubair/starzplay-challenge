import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";

export const WithErrorBoundary = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <ErrorBoundary>
          <WrappedComponent {...this.props} />
        </ErrorBoundary>
      );
    }
  };
};
