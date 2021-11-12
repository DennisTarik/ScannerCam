import React from 'react';
import DocumentList from '../../components/DocPreview/DocPreview';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './Documents.module.css';

function Documents(): JSX.Element {
  return (
    <div className={styles.container}>
      <SearchBar />
      <DocumentList />
    </div>
  );
}

export default Documents;
