import React, { useEffect, useState } from 'react';
import styles from './SearchInput.module.css';

type SearchInputProps = {
  onSearch: (value: string) => void;
};
function SearchInput({ onSearch }: SearchInputProps): JSX.Element {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value.length === 0) {
      return;
    }

    const timeoutId = setTimeout(() => {
      onSearch(value);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <label className={styles.search}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search..."
      />
      <span className={styles.clear} onClick={() => setValue('')}>
        🧽
      </span>
    </label>
  );
}

export default SearchInput;
