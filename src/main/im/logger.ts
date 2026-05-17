/**
 * Minimal stdout logger for the IM gateways.
 *
 * Adapters in this package call `imLog(level, tag, message)` so consumers
 * can swap the implementation (e.g. write to a file, ship to a remote sink)
 * by replacing this module with their own logger of the same shape.
 */

export type LogLevel = 'INFO' | 'WARN' | 'ERROR';

function formatTimestamp(): string {
  const date = new Date();
  const pad = (value: number, length = 2): string => value.toString().padStart(length, '0');
  return [
    date.getFullYear(),
    '-', pad(date.getMonth() + 1),
    '-', pad(date.getDate()),
    'T', pad(date.getHours()),
    ':', pad(date.getMinutes()),
    ':', pad(date.getSeconds()),
    '.', pad(date.getMilliseconds(), 3),
  ].join('');
}

export function imLog(
  level: LogLevel,
  tag: string,
  message: string,
  extra?: Record<string, unknown>
): void {
  const line = `[${formatTimestamp()}] [${level}] [${tag}] ${message}`;
  const out = level === 'ERROR' ? console.error : level === 'WARN' ? console.warn : console.log;
  if (extra) {
    out(line, extra);
  } else {
    out(line);
  }
}
