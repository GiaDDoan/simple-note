export const fetchAllTitles = () => {
  return fetch('/titles/get-all-documents').then((response) => response.json());
};
