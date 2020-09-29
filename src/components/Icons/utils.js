export const getSize = (width, height, size) => {
  if (size) {
    const ratio = size / width
    return {
      width: size,
      height: height * ratio,
    }
  }

  return {
    width,
    height,
  }
}
