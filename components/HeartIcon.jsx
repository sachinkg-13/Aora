import React from "react";
import Svg, { Path } from "react-native-svg";

const HeartIcon = ({ size = 24, color = "red" }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M20.84 4.61C20.3299 4.10003 19.7222 3.69346 19.0554 3.41266C18.3885 3.13185 17.6755 2.98258 16.955 2.97372C16.2345 2.96485 15.5184 3.09655 14.8499 3.36226C14.1814 3.62797 13.5747 4.02198 13.07 4.52L12 5.6L10.93 4.52C9.90864 3.4693 8.50719 2.84848 7.03777 2.84357C5.56835 2.83866 4.16306 3.45004 3.13 4.5C2.09694 5.54996 1.50487 6.95369 1.50487 8.43C1.50487 9.90631 2.09694 11.31 3.13 12.36L4.2 13.44L12 21.35L19.8 13.44L20.87 12.36C21.3712 11.8574 21.7681 11.2694 22.0401 10.6295C22.312 9.98952 22.4535 9.30955 22.457 8.62337C22.4605 7.93718 22.3259 7.25602 22.0604 6.61777C21.795 5.97951 21.4045 5.39602 20.91 4.9L20.84 4.61Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color} // Makes it filled like a heart
      />
    </Svg>
  );
};

export default HeartIcon;
