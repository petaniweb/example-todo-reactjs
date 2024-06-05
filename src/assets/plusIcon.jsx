import React from "react";

function PlusIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 24}
      height={props?.height || 24}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#fff"
        d="M24 12a1 1 0 01-1 1H13v10a1 1 0 01-2 0V13H1a1 1 0 010-2h10V1a1 1 0 012 0v10h10a1 1 0 011 1z"
      ></path>
    </svg>
  );
}

export default PlusIcon;
