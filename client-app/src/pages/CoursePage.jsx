

import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import OutputBox from '../components/OutputBox';
import SubjectsTree from '../components/SubjectsTree';
import { sendSubject } from '../services/SubjectService';
import { useLocation } from 'react-router-dom';

function CoursePage() {
  const [search, setSearch] = useState("");
  const [output, setOutput] = useState("");
const location = useLocation();
  // Example subjects data

const subjects = location.state?.courseData || {};
  const handleSearchSubmit = async () => {
    if (!search) return;
    const result = await sendSubject(search);
    setOutput(result);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ width: 320, borderRight: '1px solid #eee'}}>
        <SubjectsTree subjects={subjects} />
      </div>
      <div style={{ flex: 1, padding: '2rem' }}>
        <OutputBox output={output} />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <SearchBar search={search} setSearch={setSearch} onSearchSubmit={handleSearchSubmit} />
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
