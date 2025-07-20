// src/services/SearchService.js

export async function sendPrompt(prompt) {
  try {
    const res = await fetch('http://localhost:8000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    return data.response || data.error || '';
  } catch (err) {
    return 'Network error';
  }
}
