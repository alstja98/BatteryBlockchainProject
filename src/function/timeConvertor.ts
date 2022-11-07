import { time } from 'console';

const timeConvertor = (timestamp: number): Date => {
  const ts = new Date(timestamp * 1000);
  const year = ts.getFullYear();
  const month = ts.getMonth();
  const date = ts.getDate();
  const time = new Date(year, month, date);
  return time;
};

export default timeConvertor;
