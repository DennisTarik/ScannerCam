import React from 'react';
import styles from './DocPreview.module.css';

type DocPreviewProps = {
  title: string;
  text: string;
};

export default function DocPreview({
  title,
  text,
}: DocPreviewProps): JSX.Element {
  return (
    <article>
      <h2 className={styles.h2}>{title}</h2>
      <p>{text}</p>
    </article>
  );
}
