import React from "react";

const Icon = ({ name, mode, onClick = null }) => {
  return <i className={`ri-${name}-${mode}`} onClick={onClick}></i>;
};

export default Icon;
