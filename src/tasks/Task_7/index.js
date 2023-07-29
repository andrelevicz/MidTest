import React, { useState } from 'react';

export const Task7 = () => {
  const [grade1, setGrade1] = useState('');
  const [grade2, setGrade2] = useState('');
  const [grade3, setGrade3] = useState('');
  const [averageGrade, setAverageGrade] = useState(null);

  const handleCalculateAverage = () => {
    const parsedGrade1 = parseFloat(grade1);
    const parsedGrade2 = parseFloat(grade2);
    const parsedGrade3 = parseFloat(grade3);

    if (!isNaN(parsedGrade1) && !isNaN(parsedGrade2) && !isNaN(parsedGrade3)) {
      const average = (parsedGrade1 + parsedGrade2 + parsedGrade3) / 3;
      setAverageGrade(average.toFixed(2));
    } else {
      setAverageGrade(null);
    }
  };

  return (
    <div>
      <h2>Grade Calculator</h2>
      <div>
        <label>Grade 1:</label>
        <input
          type="number"
          value={grade1}
          onChange={(e) => setGrade1(e.target.value)}
        />
      </div>
      <div>
        <label>Grade 2:</label>
        <input
          type="number"
          value={grade2}
          onChange={(e) => setGrade2(e.target.value)}
        />
      </div>
      <div>
        <label>Grade 3:</label>
        <input
          type="number"
          value={grade3}
          onChange={(e) => setGrade3(e.target.value)}
        />
      </div>
      <button onClick={handleCalculateAverage}>Calculate Average</button>
      {averageGrade !== null && <p>The average grade is: {averageGrade}</p>}
    </div>
  );
};

