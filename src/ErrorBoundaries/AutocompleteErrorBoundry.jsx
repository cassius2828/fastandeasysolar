import  { Component } from "react";
import { FormContext } from "../context/FormContext"; // Make sure you are importing the correct context

class AutocompleteErrorBoundary extends Component {
  static contextType = FormContext; // Use contextType to connect to the context

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service, if needed
    console.error("Error in Autocomplete component:", error, errorInfo);
  }

  clearAddress = () => {
    const { handleUpdateForm } = this.context; 
    handleUpdateForm({ target: { name: "address", value: "" } }); 
    this.setState(() => ({ hasError: false }));
  };

  render() {
    if (this.state.hasError) {
      // Customize error message for the input field
      return (
        <div className="text-red-500 flex justify-center items-center gap-12">
          Error loading address. Please clear the input and re-enter the address
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
