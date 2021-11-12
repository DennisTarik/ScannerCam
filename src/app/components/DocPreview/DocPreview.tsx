import React, { useEffect, useState } from 'react';
import getDocuments from '../../utils/fetchDocuments';
import styles from './DocPreview.module.css';

type Document = {
  id: number;
  title: string;
  text: string;
};

export default function DocumentList(): JSX.Element {
  const [documents, setDocuments] = useState<null | Document[]>(null);
  useEffect(() => {
    async function load() {
      const newDocuments = await getDocuments();
      setDocuments(newDocuments);
    }
    load();
  }, []);
  return (
    <section>
      {documents &&
        documents.slice(0, 5).map((document) => (
          <article className={styles.doc} key={document.id}>
            <p>{document.text}</p>
          </article>
        ))}
    </section>
  );
}
