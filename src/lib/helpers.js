export const getDateFromLocale = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString();
};

export const concatClases = (...clases) => {
  return clases.reduce((ac, c) => {
    if (c) {
      ac += ` ${c}`;
    }
    return ac;
  }, "");
};
