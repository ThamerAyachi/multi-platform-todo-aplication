export const newDateInSeconds = (): string => {
  const date = new Date();

  return date.getTime().toString();
};

export const uniqueId = (): string => {
  const id = newDateInSeconds() + Math.floor(Math.random() * 10);
  return id;
};

export const setTime = (time: string): string => {
  const t = parseInt(time);
  const date = parseInt(newDateInSeconds());
  const def = Math.floor((date - t) / 1000);
  if (def < 60) {
    return def + ' sec ago'; // this for seconds
  } else if (def < 60 * 60) {
    return Math.floor(def / 60) + ' min ago'; // this for minuets
  } else if (def < 60 * 60 * 24) {
    return Math.floor(def / (60 * 60)) + ' hour ago'; // this for hours
  } else if (def < 60 * 60 * 24 * 30) {
    return Math.floor(def / (60 * 60 * 24)) + ' day ago'; // this for days
  } else if (def < 60 * 60 * 24 * 30 * 12) {
    return Math.floor(def / (60 * 60 * 24 * 30)) + ' month ago'; // this for months
  } else {
    return Math.floor(def / (60 * 60 * 24 * 30 * 12)) + ' year ago'; // this for years
  }
};
