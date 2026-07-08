import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="pointer-events-none fixed -z-0 opacity-80"
      style={{ top, left, width, height, transform: "translate(-50%, -50%)" }}
    >
      <div className="h-full w-full animate-blob rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400 opacity-20 blur-3xl" />
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({ top: PropTypes.string, left: PropTypes.string }),
  size: PropTypes.shape({ width: PropTypes.string, height: PropTypes.string }),
};

export default BlurBlob;
