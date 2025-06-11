import React, { ReactNode } from 'react';

type Props = {
  imageSrc: string;
  height: string;
  children?: ReactNode;
};

const ParallaxAtoms = ({ imageSrc, height, children }: Props) => {
  return (
    <div style={{ background: `url(${imageSrc})`, width: "100vw", height: height, backgroundAttachment: "fixed", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      {children}
    </div >
  );
};

export default ParallaxAtoms;
