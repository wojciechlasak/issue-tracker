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

function sameDay(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

function correctTime(d, eventTimezoneOffset) {
  let timeCorrection = d.getTimezoneOffset() - eventTimezoneOffset;
  d.setMinutes(d.getMinutes() + timeCorrection);
}

export function getDate(eventDate, eventTimezoneOffset = 2) {
  let d = new Date(eventDate);
  let now = new Date();
  correctTime(d, eventTimezoneOffset);
  correctTime(now, eventTimezoneOffset);

  if (sameDay(d, now)) {
    let offsetDate = new Date(now - d);
    let hours = offsetDate.getHours();
    let minutes = offsetDate.getMinutes();
    return hours === 0 ? `${hours} h ago` : `${minutes} min ago`;
  }

  return `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}
