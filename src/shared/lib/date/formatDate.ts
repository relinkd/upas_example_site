import dayjs from 'dayjs';

export const formatDate = (date: string | number, dateFormat = 'DD.MM.YYYY') => {
  return typeof date === 'string' ? dayjs(date).format(dateFormat) : dayjs.unix(date).format(dateFormat);
};
