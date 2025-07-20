// src/services/CourseService.js

export async function sendCourse(course_name) {
  try {
    const res = await fetch('http://localhost:8000/course', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ course_name })
    });
    const data = await res.json();
    return data.response || data.error || '';
  } catch (err) {
    return 'Network error';
  }
}
