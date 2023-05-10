import React from "react";
import PropTypes from "prop-types";

const TitleApp = ({ title }) => {
  return (
    <div className="title-app">
      <h1>{title}</h1>
    </div>
  );
};

TitleApp.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleApp;
