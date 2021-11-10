import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import { recognizeText, RecognizeProgress } from '../../utils/ocr';
import Progress from '../../components/Progress/Progress';

function Scan(): JSX.Element {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);
  const [recognizedProgress, setRecognizedProgress] =
    useState<RecognizeProgress | null>(null);
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
      {recognizedProgress ? (
        <Progress
          progress={recognizedProgress.progress * 100}
          status={recognizedProgress.status}
        />
      ) : (
        <button
          disabled={imageURL === null}
          className={styles.scan}
          onClick={() => {
            if (imageURL) {
              recognizeText(imageURL, setRecognizedProgress).then(
                setRecognizedText
              );
            }
          }}
        >
          Scan an Image
        </button>
      )}
      <a href="#" className={styles.documents}>
        Saved documents
      </a>
    </div>
  );
}

export default Scan;
