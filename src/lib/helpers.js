export const getDateFromLocale = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString();
};
