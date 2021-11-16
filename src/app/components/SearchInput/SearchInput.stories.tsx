import React from 'react';
import SearchInput from './SearchInput';

export default {
  component: SearchInput,
  title: 'Components/SearchInput',
};

export const Default = () => <SearchInput onSearch={console.log} />;
