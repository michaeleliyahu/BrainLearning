
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import OutputBox from '../components/OutputBox';
import { sendSubject } from '../services/SubjectService';

function CoursePage() {
  const [search, setSearch] = useState("");
  const [output, setOutput] = useState("");

  const handleSearchSubmit = async () => {
    if (!search) return;
    const result = await sendSubject(search);
    setOutput(result);
  };

  return (
    <>
      <OutputBox output={output} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <SearchBar search={search} setSearch={setSearch} onSearchSubmit={handleSearchSubmit} />
      </div>
    </>
  );
}

export default CoursePage;
