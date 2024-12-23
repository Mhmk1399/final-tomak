import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed top-1/2 left-1/2 right-1/2">
      <Image
        src="/assets/images/loading.gif"
        alt="loading"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Loading;
