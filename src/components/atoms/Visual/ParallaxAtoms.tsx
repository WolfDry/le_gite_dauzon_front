import React, { ReactNode } from 'react';

type Props = {
  imageSrc: string
  height: string
  width?: string
  children?: ReactNode
};

const ParallaxAtoms = ({ imageSrc, height, children, width }: Props) => {
  return (
    <div style={{ background: `url(${imageSrc})`, width: width ? width : "100vw", height: height, backgroundAttachment: "fixed", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      {children}
    </div >
  );
};

export default ParallaxAtoms;
