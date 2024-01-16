// mostly code from reactjs.org/docs/error-boundaries.html
import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
/*
We cannot convert this class component to a function component using React Hooks. 
Because there are no Hook equivalents for the componentDidCatch and getDerivedStateFromError methods, 
which are essential for creating error boundaries1. 
These methods work like a JavaScript catch {} block, but for components2. T
hey allow you to catch errors in the component tree and display a fallback UI instead of crashing the app2.
*/