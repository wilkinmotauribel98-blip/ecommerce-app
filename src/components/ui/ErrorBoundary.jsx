import { Component } from "react";
import ErrorState from "./ErrorState";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorState
          title="Something went wrong"
          message="Reload the page to try again."
          onRetry={() => window.location.reload()}
        />
      );
    }
    return this.props.children;
  }
}