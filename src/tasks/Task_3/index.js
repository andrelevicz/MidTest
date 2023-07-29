import React, { useState } from 'react';

export const Task3 = () => {
 
 
  const [inputNumber, setInputNumber] = useState('');
  const [factorialValue, setFactorialValue] = useState(null);


  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }

  const handleCalculateFactorial = () => {
    const parsedNumber = parseInt(inputNumber);
    if (!isNaN(parsedNumber) && parsedNumber >= 0) {
      const result = factorial(parsedNumber);
      setFactorialValue(result);
    } else {
      setFactorialValue(null);
    }
  };

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
      />
      <button onClick={handleCalculateFactorial}>Calculate Factorial</button>
      {factorialValue !== null && (
        <p>
          Factorial of {inputNumber} is: {factorialValue}
        </p>
      )}
    </div>
  );
};

