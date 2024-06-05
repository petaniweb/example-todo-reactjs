import React from "react";

function CheckIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 18}
      height={props?.height || 13}
      fill="none"
      viewBox="0 0 18 13"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.785 1.674l-11 11a.688.688 0 01-.973 0L1 7.86a.688.688 0 01.973-.972l4.326 4.327L16.812.7a.688.688 0 01.973.973z"
      ></path>
    </svg>
  );
}

export default CheckIcon;
