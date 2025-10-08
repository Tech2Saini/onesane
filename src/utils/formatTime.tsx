// Converts seconds into human-readable format (e.g., "2h 5m 30s")
export function formatReadingTime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const parts: string[] = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  // if (seconds > 0 || parts.length === 0) parts.push(`${Math.floor(seconds)}s`);

  return parts.join(" ");
}


// Converts a date string into a human-readable relative time (e.g., "2 hours ago")
export function humanizeDate(date: string | Date): string {
  const now = new Date();
  const past = new Date(date);
  const diffMs = now.getTime() - past.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);

  if (diffSeconds < 60) return `${diffSeconds}s ago`;
  if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)}m ago`;
  if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)}h ago`;
  if (diffSeconds < 604800) return `${Math.floor(diffSeconds / 86400)}d ago`;

  return past.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

// Converts large numbers into a short string (e.g., 1.2k, 3.4M, 2B)
export function formatNumber(num: number) {
  if (num === null || num === undefined) return "0";

  const absNum = Math.abs(num);

  if (absNum >= 1_000_000_000) {
    return Math.floor(num / 1_000_000_000) + "B";
  } else if (absNum >= 1_000_000) {
    return Math.floor(num / 1_000_000) + "M";
  } else if (absNum >= 1_000) {
    return Math.floor(num / 1_000) + "k";
  }

  return Math.floor(num).toString();
}
