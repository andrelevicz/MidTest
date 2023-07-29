import React, { useState } from 'react';

export const Task8 = () => {
  const [initialCapital, setInitialCapital] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [investmentTime, setInvestmentTime] = useState('');
  const [finalValue, setFinalValue] = useState(null);

  const handleCalculateFinalValue = () => {
    const parsedCapital = parseFloat(initialCapital);
    const parsedRate = parseFloat(interestRate);
    const parsedTime = parseInt(investmentTime);

    if (!isNaN(parsedCapital) && !isNaN(parsedRate) && !isNaN(parsedTime) && parsedTime >= 0) {
      const ratePerMonth = parsedRate / 100 / 12;
      const finalValue = parsedCapital * Math.pow(1 + ratePerMonth, parsedTime);
      setFinalValue(finalValue.toFixed(2));
    } else {
      setFinalValue(null);
    }
  };

  return (
    <div>
      <h2>Investment Calculator</h2>
      <div>
        <label>Initial Capital:</label>
        <input
          type="number"
          value={initialCapital}
          onChange={(e) => setInitialCapital(e.target.value)}
        />
      </div>
      <div>
        <label>Interest Rate (% per year):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div>
        <label>Investment Time (months):</label>
        <input
          type="number"
          value={investmentTime}
          onChange={(e) => setInvestmentTime(e.target.value)}
        />
      </div>
      <button onClick={handleCalculateFinalValue}>Calculate Final Value</button>
      {finalValue !== null && <p>The final value of the investment is: {finalValue}</p>}
    </div>
  );
};
