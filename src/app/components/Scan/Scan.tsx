import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';

function Scan() {
  const [imageURL, setImageURL] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      {imageURL ? (
        <img src={imageURL} />
      ) : (
        <img
          src="src/assets/617COYAgKzL.png"
          alt="ScannerIcon"
          className={styles.icon}
        />
      )}
      <ImageInput onUpload={setImageURL} />
      <button disabled={imageURL === null} className={styles.scan}>
        Scan an Image
      </button>
      <a href="#">Skip</a>
    </div>
  );
}

export default Scan;
