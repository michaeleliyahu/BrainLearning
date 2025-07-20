

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import OutputBox from '../components/OutputBox';
import { sendCourse } from '../services/CourseService';



function HomePage() {
  const [search, setSearch] = useState("");
  const [output, setOutput] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = async () => {
    if (!search) return;
    const result = await sendCourse(search);
    setOutput(result);
  };

  const handleStartCourse = () => {
    navigate('/course', { state: { courseData: output } });
  };

  return (
    <>
      <OutputBox output={output} />
      {output && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <button
            style={{ padding: '0.7rem 2rem', fontSize: '1.1rem', borderRadius: '1.5rem', background: '#4285f4', color: '#fff', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(60,64,67,.10)' }}
            onClick={handleStartCourse}
          >
            lets start course
          </button>
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <SearchBar search={search} setSearch={setSearch} onSearchSubmit={handleSearchSubmit} />
      </div>
    </>
  );
}

export default HomePage;
