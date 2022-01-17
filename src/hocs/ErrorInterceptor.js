import React from 'react';

const ErrorInterceptor = WrappedComponent => {
  return class extends React.Component {
    state = { error: false, message: '' };

    componentDidCatch(error) {
      this.setState({ error: true, message: error.message });
    }

    render() {
      if (this.state.error) {
        return <span>{this.state.message}</span>;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default ErrorInterceptor;
