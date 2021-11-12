import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import useRecognizeText from '../../utils/useRecognizeText';
import Progress from '../../components/Progress/Progress';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';

function Scan(): JSX.Element {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const { text, progress, recognize } = useRecognizeText();
  let content;

  if (text) {
    content = <p className={styles.p}>{text}</p>;
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
      {!text && progress && (
        <Progress progress={progress.progress} status={progress.status} />
      )}
      {text ? (
        <div>{text && <AddDocumentForm text={text} />}</div>
      ) : (
        <button
          disabled={imageURL === null}
          className={styles.scan}
          onClick={() => {
            if (imageURL) {
              recognize(imageURL);
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
