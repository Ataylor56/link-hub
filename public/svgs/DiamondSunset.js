import * as React from "react";

const SvgDiamondSunset = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="#0B0C10" d="M0 0h24v24H0z" />
    <defs>
      <linearGradient
        id="diamond-sunset_svg__a"
        x1={0}
        x2={0}
        y1={0}
        y2={1}
        gradientTransform="rotate(140 .5 .5)"
      >
        <stop offset={0} stopColor="#1F2833" />
        <stop offset={1} stopColor="#66FCF1" />
      </linearGradient>
    </defs>
    <pattern
      id="diamond-sunset_svg__b"
      width={9}
      height={9}
      patternUnits="userSpaceOnUse"
    >
      <circle fill="#0B0C10" cx={4.5} cy={4.5} r={4.5} />
    </pattern>
    <rect width="100%" height="100%" fill="url(#diamond-sunset_svg__a)" />
    <rect
      width="100%"
      height="100%"
      fill="url(#diamond-sunset_svg__b)"
      fillOpacity={0.11}
    />
  </svg>
);

export default SvgDiamondSunset;
