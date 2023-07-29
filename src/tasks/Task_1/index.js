import React, { useState } from 'react';
import './styles.css'

export const Task1 = () => {

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [result, setResult] = useState('');
  
    const handleInputChange = (event, inputName) => {
      const inputValue = event.target.value;
      inputName === 'value1' ? setValue1(inputValue) : setValue2(inputValue);
    };


  const handleOperation = (operation) => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    switch (operation) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      default:
        setResult('Invalid operation');
    }
  };
  
  return (
    <div>
        <h2>Simple Calculator</h2>
        <input
        type="number"
        value={value1}
        onChange={(e) => handleInputChange(e, 'value1')}
        />
        <input
        type="number"
        value={value2}
        onChange={(e) => handleInputChange(e, 'value2')}
        />

        <div>
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleOperation('/')}>/</button>
        </div>

        <p>Result: {result}</p>
  </div>
);
};


