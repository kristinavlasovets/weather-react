import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={200}
    height={200}
    viewBox="0 0 200 200"
    backgroundColor="#a7a5a5"
    foregroundColor="#cccccc"
  >
    <circle cx="93" cy="95" r="31" />
    <rect x="67" y="150" rx="0" ry="0" width="51" height="41" />
    <rect x="45" y="15" rx="0" ry="0" width="95" height="28" />
  </ContentLoader>
);

export default Skeleton;
