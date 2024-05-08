import Image from "next/image";
import React from "react";
const w = 50;
function MyIcon({ className, iconName }) {
  return (
    <Image
      src={`/${iconName}.png`}
      alt="globe"
      width={w}
      height={w}
      className={className}
    />
  );
}

export { MyIcon };
