/* export default async function getDocuments() {
  const response = await fetch('https://json-server.machens.dev/docs', {
    method: 'GET',
  });
  const Docs = await response.json();

  return Docs;
}

 */
import { useEffect, useState } from 'react';

type Document = {
  id: number;
  title: string;
  text: string;
};

function useDocuments(search: string): Document[] | null {
  const [documents, setDocuments] = useState<Document[] | null>(null);

  useEffect(() => {
    fetch(`https://json-server.machens.dev/docs?q=${search}`)
      .then((response) => response.json())
      .then(setDocuments);
  }, [search]);

  return documents;
}

export default useDocuments;
