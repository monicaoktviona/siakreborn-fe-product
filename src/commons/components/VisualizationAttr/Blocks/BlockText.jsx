import React from "react";
import PropTypes from "prop-types";
import Label from "../Label";

const BlockText = ({ content, label }) => {
  return (
    <>
      <Label label={label} />
      <div>{content}</div>
    </>
  );
};

BlockText.propTypes = {
  content: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default BlockText;
