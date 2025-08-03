export const formatDate = (date: Date): string => date.toISOString().slice(0, 10);

export const getDefaultDateRange = (daysBack = 3): { date_start: string; date_end: string } => {
  const today = new Date();
  const date_end = formatDate(today);

  const pastDate = new Date(today);
  pastDate.setDate(today.getDate() - daysBack);
  const date_start = formatDate(pastDate);

  return { date_start, date_end };
};
