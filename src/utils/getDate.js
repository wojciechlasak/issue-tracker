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

function diffMinutes(d2, d1) {
  var diff = (d2.getTime() - d1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
}

export function getDate(eventDate) {
  let d = new Date(eventDate);
  let now = new Date();
  let diff = diffMinutes(d, now);

  if (diff < 1440)
    return diff > 60 ? `${Math.round(diff / 60)} h ago` : `${diff} min ago`;

  return `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}
