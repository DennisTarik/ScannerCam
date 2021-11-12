import React from 'react';
import DocPreview from './DocPreview';

export default { component: DocPreview, title: 'Components/DocPreview' };

export const Page1 = (): JSX.Element => (
  <DocPreview title="HomePage" text="Test test test" />
);

export const Page2 = (): JSX.Element => (
  <DocPreview title="ScanPage" text="123123123" />
);

export const Page3 = (): JSX.Element => (
  <DocPreview title="FolderPage" text="123123123" />
);
