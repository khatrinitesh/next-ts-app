import { BannerState } from "@/interface";
import React from "react";

const Banner: React.FC<BannerState> = ({ children, bannerStyle }) => {
  return (
    <div className={`${bannerStyle} bannerContent py-[50px] bg-orange-500`}>
      <div className="container mx-auto">
      {children}
      </div>
    </div>
  );
};

export default Banner;
