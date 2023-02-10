import React from "react";

const Icon = ({ name, mode, ...props }) => {
  return <i className={`ri-${name}-${mode}`} {...props}></i>;
};

export default Icon;
