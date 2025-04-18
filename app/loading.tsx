import React from "react";
import Image from "next/image";
import loading from "../public/assets/videos/loading.gif";

const Loading = () => {
  return (
    <div className="relative bg-white  h-screen overflow-hidden">
      <Image
        src={loading}
        alt="loading"
        width={100}
        height={100}
        className="fixed z-[5000] top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default Loading;
