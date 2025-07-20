// src/services/SubjectService.js

export async function sendSubject(subject) {
  try {
    const res = await fetch('http://localhost:8000/subject', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sentence: subject })
    });
    const data = await res.json();
    return data.response || data.error || '';
  } catch (err) {
    return 'Network error';
  }
}
