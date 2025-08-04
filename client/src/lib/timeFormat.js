// lib/timeFormat.js
export const timeFormat = (minutes) => {
  if (!minutes || isNaN(minutes)) return 'N/A';
  
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins}m`;
};

export default timeFormat