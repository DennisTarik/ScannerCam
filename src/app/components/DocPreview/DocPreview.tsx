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
    <div className={styles.body}>
      <article className={styles.document}>
        <h2 className={styles.h2}>{title}</h2>
        <p>{text}</p>
      </article>
      <article className={styles.document}>
        <h2 className={styles.h2}>{title}</h2>
        <p>{text}</p>
      </article>
      <article className={styles.document}>
        <h2 className={styles.h2}>{title}</h2>
        <p>{text}</p>
      </article>
      <article className={styles.document}>
        <h2 className={styles.h2}>{title}</h2>
        <p>{text}</p>
      </article>
    </div>
  );
}
