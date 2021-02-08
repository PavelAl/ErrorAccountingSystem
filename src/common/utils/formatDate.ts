export function formatDate(formatedDate: Date | string): string {
  const date = typeof formatedDate === 'string' ? new Date(formatedDate) : formatedDate;

  const dateValue = appendZeroToShortDateNumber(date.getDate());
  const monthValue = appendZeroToShortDateNumber(date.getMonth() + 1);
  const yearValue = date.getFullYear().toString();

  return [dateValue, monthValue, yearValue].join('.')
}

function appendZeroToShortDateNumber(value: number): string {
  return value < 10 ? `0${value}` : value.toString();
}