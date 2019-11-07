import React, {Component} from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch(error, errorInfo) {
    // if it would use the old state then we should use this format:
    // this.setState((prevState, props) => { ... return newState; });
    this.setState({hasError: true, errorMessage: error});
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;