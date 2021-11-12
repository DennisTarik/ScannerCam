export default async function getDocuments() {
  const response = await fetch('https://json-server.machens.dev/docs', {
    method: 'GET',
  });
  const Docs = await response.json();

  return Docs;
}
