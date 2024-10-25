import React, { Component } from "react";
import { FormContext } from "../context/FormContext"; // Make sure you are importing the correct context

class AutocompleteErrorBoundary extends Component {
  static contextType = FormContext; // Use contextType to connect to the context

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service, if needed
    console.error("Error in Autocomplete component:", error, errorInfo);
  }

  clearAddress = () => {
    const { handleUpdateForm, addClearAutocompleteInputBtn } = this.context; // Correctly accessing the context
    handleUpdateForm({ target: { name: "address", value: "" } }); // Update the address field in the form context
    this.setState({ hasError: false });
    addClearAutocompleteInputBtn(() =>
      handleUpdateForm({ target: { name: "address", value: "" } })
    );
  };

  render() {
    if (this.state.hasError) {
      // Customize error message for the input field
      return (
        <div className="text-red-500 flex justify-center items-center gap-12">
          There was an error loading the address input. Please try again later.
          {this.form}
          <button
            type="button"
            onClick={this.clearAddress}
            className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
          >
            Clear Address
          </button>
        </div>
      );
    }

    // If no error, render children
    return this.props.children;
  }
}

export default AutocompleteErrorBoundary;
