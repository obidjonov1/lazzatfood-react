
import React from "react";

export function Advertisements() {
  return (
    <div className="ads_product_frame">
      <video
        className={"ads_video"}
        autoPlay={true}
        loop
        muted
        playsInline
        data-video-media=""
        width={"100%"}
        height={"auto"}
      >
        <source
          type="video/mp4"
          src="/video/ads.mp4"
        />
      </video>
    </div>
  );
}
