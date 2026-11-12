const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME

export const imageUrl = (publicId: string, transformation: string) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,${transformation}/${publicId}`

export const imageSrcSet = (publicId: string, ratio: string, widths: number[]) =>
  widths.map((w) => `${imageUrl(publicId, `c_fill,g_auto,ar_${ratio},w_${w}`)} ${w}w`).join(', ')
