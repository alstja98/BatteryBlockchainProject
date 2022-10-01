import React from 'react';

const Dropdown = (props: any) => {
  return (
    <article
      className={`components-dropdown ${
        props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'
      }`}
    >
      {props.children}
    </article>
  );
};

export default Dropdown;
