// src/components/CropImage.js
import React, { useCallback, useState } from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from './utils';
import './CropImage.css';

export default function CropImage({ imageSrc, onCancel, onCropComplete }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropCompleteHandler = useCallback((_, areaPixels) => {
    setCroppedAreaPixels(areaPixels);
  }, []);

  const handleDone = async () => {
    const { file } = await getCroppedImg(imageSrc, croppedAreaPixels);
    onCropComplete(file);
  };

  return (
    <div className="crop-modal">
      <div className="crop-container">
        <Cropper
          image={imageSrc}
          crop={crop}
          zoom={zoom}
          aspect={1}
          cropShape="round"
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropCompleteHandler}
        />
      </div>
      <div className="crop-controls">
        <button onClick={onCancel}>Batal</button>
        <button onClick={handleDone}>Selesai</button>
      </div>
    </div>
  );
}
