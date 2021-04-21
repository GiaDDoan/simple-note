export const fetchAllTitles = () => {
  return fetch('/title/get-all-titles').then((response) => response.json());
};
