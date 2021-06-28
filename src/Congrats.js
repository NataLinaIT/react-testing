import React from "react";

/**
 * Factory function to create a ShallowWrapper for Congrats component
 * @function
 * @param {object} props - Component props specific to this setup
 * @returns {JSX.Element} - Render component
 */

export default function Congrats(props) {
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congrats! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
}
