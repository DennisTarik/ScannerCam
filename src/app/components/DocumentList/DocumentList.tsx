import React, { useState } from 'react';
import getDocuments from '../../utils/fetchDocuments';
import styles from './DocumentList.module.css';
import SearchInput from '../SearchInput/SearchInput';

function DocumentList(): JSX.Element {
  const [search, setSearch] = useState('');
  const documents = getDocuments(search);

  return (
    <section>
      <SearchInput onSearch={setSearch} />
      <div className={styles.container}>
        {!documents && <span>Loading...</span>}
        {documents?.length === 0 && <span>No documents</span>}
        {documents?.map((document) => (
          <article key={document.id}>{document.title}</article>
        ))}
      </div>
    </section>
  );
}

export default DocumentList;
