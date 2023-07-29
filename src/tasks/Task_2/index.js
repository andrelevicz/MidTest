import React, { useState } from 'react';

export const Task2 = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [isInputPrime, setIsInputPrime] = useState(false);
  const [firstTenPrimes, setFirstTenPrimes] = useState([]);

  function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
  
    if (number % 2 === 0 || number % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }

  const handleCheckPrime = () => {
    const parsedNumber = parseInt(inputNumber);
    if (!isNaN(parsedNumber) && parsedNumber > 0) {
      setIsInputPrime(isPrime(parsedNumber));
    } else {
      setIsInputPrime(false);
    }
  };

  const handleCalculateFirstTenPrimes = () => {
    const primes = [];
    let number = 2;
    while (primes.length < 10) {
      if (isPrime(number)) {
        primes.push(number);
      }
      number++;
    }
    setFirstTenPrimes(primes);
  };

  return (
    <div>
      <h2>Check if a Number is Prime</h2>
      <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
      />
      <button onClick={handleCheckPrime}>Check Prime</button>
      {isInputPrime !== null && (
        <p>{isInputPrime ? 'Prime' : 'Not Prime'}</p>
      )}

      <h2>First 10 Prime Numbers</h2>
      <button onClick={handleCalculateFirstTenPrimes}>
        Calculate First 10 Primes
      </button>
      <ul>
        {firstTenPrimes.map((prime) => (
          <li key={prime}>{prime}</li>
        ))}
      </ul>
    </div>
  );
};
