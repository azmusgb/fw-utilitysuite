export const controlService = (server: string, serviceName: string, action: string) => {
  // Implement control service logic here
  console.log(`${action} ${serviceName} on ${server}`);
};

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    showFeedback('Copied to clipboard!', 'success');
  }, () => {
    showFeedback('Failed to copy', 'error');
  });
};

export const showFeedback = (message: string, type: string) => {
  const feedbackDiv = document.getElementById('feedback');
  if (feedbackDiv) {
    feedbackDiv.textContent = message;
    feedbackDiv.className = `feedback ${type}`;
  }
};

export const environmentServers: Record<Environment, string[]> = {
  PRD: ["SACAPPFWK101", "SACAPPFWK102", /*...*/],
  MOT: ["SACAPPFWKP60", "SACAPPFWKP61", /*...*/],
  MOTx: ["SACAPPFWKP05", "SACAPPFWKP06", /*...*/],
  PIT: ["SACAPPFWKP70", "SACAPPFWKP71", /*...*/],
  EIT: ["SACAPPFWKP04", "SACAPPFWKP60"],
  DEV: ["SACAPPFWKD01"]
};

export const serviceSuffixes: Record<Environment, string> = {
  PRD: "ddce",
  PIT: "ddce_pit",
  MOTx: "ddce_motx",
  MOT: "ddce_mot",
  EIT: "ddce_eit",
  DEV: "ddce_dev"
};