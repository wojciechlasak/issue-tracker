export const getStatusColor = status => {
  switch (status) {
    case 'pending':
      return '#e09d00';
    case 'open':
      return '#49a078';
    case 'closed':
      return '#FF4A75';
    default:
      return;
  }
};
