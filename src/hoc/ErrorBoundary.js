import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error) => {
        this.setState(
            { hasError: true, errorMessage: error.message }
        )
    }

    render() {
        if (this.state.hasError) {
            return <h1> Error in Application {this.state.errorMessage} </h1>;
        } else
            return (this.props.children);
    }
}

export default ErrorBoundary;