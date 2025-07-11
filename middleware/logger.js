const LOG_KEY = 'urlShortenerLogs';

export function logEvent(event, metadata = {}) {
  const logs = JSON.parse(localStorage.getItem(LOG_KEY)) || [];
  logs.push({
    event,
    metadata,
    timestamp: new Date().toISOString(),
  });
  localStorage.setItem(LOG_KEY, JSON.stringify(logs));
}

export function getLogs() {
  return JSON.parse(localStorage.getItem(LOG_KEY)) || [];
}

export function clearLogs() {
  localStorage.removeItem(LOG_KEY);
}