const aDayMs = 3600 * 1000 * 24;

export const getRemainedDays = (timeStamp: number) =>
  Math.ceil((timeStamp - new Date().getTime()) / aDayMs);
