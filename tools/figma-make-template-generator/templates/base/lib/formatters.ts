export function formatDateIso(date: string | number | Date): string {
  const d = new Date(date);
  return Number.isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
}
