import React from "react";

function TrashIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 18}
      height={props?.height || 19}
      fill="none"
      viewBox="0 0 18 19"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16.611 3.125H1.486a.687.687 0 100 1.375h.688v12.375a1.375 1.375 0 001.375 1.375h11a1.375 1.375 0 001.375-1.375V4.5h.687a.688.688 0 100-1.375zm-2.062 13.75h-11V4.5h11v12.375zM4.924 1.062A.687.687 0 015.61.375h6.875a.688.688 0 010 1.375H5.611a.687.687 0 01-.687-.688z"
      ></path>
    </svg>
  );
}

export default TrashIcon;
