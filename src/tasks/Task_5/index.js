import React, { useState } from 'react';

export const Task5 = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [tableData, setTableData] = useState([]);

  const handleGenerateTable = () => {
    const parsedNumber = parseInt(inputNumber);
    if (!isNaN(parsedNumber)) {
      const table = Array.from({ length: 10 }, (_, index) => ({
        multiplier: index + 1,
        result: parsedNumber * (index + 1),
      }));
      setTableData(table);
    } else {
      setTableData([]);
    }
  };

  return (
    <div>
      <h2>Multiplication Table Generator</h2>
      <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
      />
      <button onClick={handleGenerateTable}>Generate Table</button>
      {tableData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Multiplier</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.multiplier}>
                <td>{row.multiplier}</td>
                <td>{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

