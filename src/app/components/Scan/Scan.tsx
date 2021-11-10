import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import Tesseract from 'tesseract.js';

function Scan() {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  let content;

  if (recognizedText) {
    content = <p className={styles.p}>{recognizedText}</p>;
  } else if (imageURL) {
    content = <img className={styles.upload} src={imageURL} />;
  } else {
    content = (
      <img
        src="src/app/assets/617COYAgKzL.png"
        alt="ScannerIcon"
        className={styles.icon}
      />
    );
  }
  return (
    <div className={styles.container}>
      <p className={styles.title}>ScanCam</p>
      {content}
      <ImageInput onUpload={setImageURL} />
      <button
        disabled={imageURL === null}
        className={styles.scan}
        onClick={() => {
          if (imageURL) {
            Tesseract.recognize(imageURL, 'eng', {
              logger: (message) =>
                message.status === 'recognizing text' &&
                setProgress(message.progress.toFixed(2)),
            }).then((result) => {
              const text = result.data.text;
              setRecognizedText(text);
            });
          }
        }}
      >
        Scan an Image
      </button>
      <a href="#" className={styles.documents}>
        Saved documents
      </a>
    </div>
  );
}

export default Scan;
