// src/utils/utils.js
export const getCroppedImg = (imageSrc, croppedAreaPixels) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;
      const ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.arc(
        croppedAreaPixels.width / 2,
        croppedAreaPixels.height / 2,
        croppedAreaPixels.width / 2,
        0,
        2 * Math.PI
      );
      ctx.clip();

      ctx.drawImage(
        image,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
      );

      canvas.toBlob(blob => {
        if (!blob) return reject(new Error('Canvas is empty'));
        const file = new File([blob], 'cropped.jpg', { type: 'image/jpeg' });
        resolve({ blob, file });
      }, 'image/jpeg');
    };
    image.onerror = () => reject(new Error('Failed to load image'));
  });
};
