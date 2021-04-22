const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function getDate(event_date, event_timezone_offset = 2) {
  let d = new Date(event_date);
  let timeCorrection = d.getTimezoneOffset() - event_timezone_offset;
  d.setMinutes(d.getMinutes() + timeCorrection);

  return `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}
