import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="relative">
      <Image
        src="/assets/images/loading.gif"
        alt="loading"
        width={200}
        height={200}
        className="absolute z-[5000] transition-transform transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default Loading;
