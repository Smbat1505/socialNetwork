import React from "react";
import { logg } from "img";

type PreloaderType = {};

export const Preloader: React.FC<PreloaderType> = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.7)",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: " blur(10px)",
      }}
    >
      <img src={logg} />
    </div>
  );
};
