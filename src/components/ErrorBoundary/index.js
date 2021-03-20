import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    //Log error to sentry or similar service here here
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 className="mt-5 text-white text-center text-lg">
          Something went wrong.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default React.memo(ErrorBoundary);
