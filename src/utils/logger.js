export function logEvent(eventType, details) {
  const log = `[${new Date().toISOString()}] [${eventType}] ${JSON.stringify(details)}`;
  console.log(log);
  // You can extend this to store logs in localStorage if needed
}

