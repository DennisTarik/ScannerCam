import React, { ChangeEvent, useState } from 'react';
import styles from './ImageInput.module.css';

type ImageInputProps = {
  onUpload: (url: string) => void;
};

function ImageInput({ onUpload }: ImageInputProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImageURL = URL.createObjectURL(file);
    setImageUrl(newImageURL);
    onUpload(newImageURL);
  };

  return (
    <label>
      <input
        className={styles.input}
        type="file"
        accept="image/*"
        placeholder="test"
        onChange={handleChange}
      />
      <p className={styles.text}>Upload an Image</p>
      {imageUrl && <img src={imageUrl} />}
    </label>
  );
}

export default ImageInput;
