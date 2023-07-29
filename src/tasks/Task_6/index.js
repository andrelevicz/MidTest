import React, { useState } from 'react';

export const Task6 = () => {
  const [inputSentence, setInputSentence] = useState('');
  const [vowelCount, setVowelCount] = useState(0);

  const handleCountVowels = () => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const count = Array.from(inputSentence).reduce(
      (accumulator, char) => (vowels.includes(char) ? accumulator + 1 : accumulator),
      0
    );
    setVowelCount(count);
  };

  return (
    <div>
      <h2>Vowel Counter</h2>
      <input
        type="text"
        value={inputSentence}
        onChange={(e) => setInputSentence(e.target.value)}
      />
      <button onClick={handleCountVowels}>Count Vowels</button>
      {vowelCount !== null && (
        <p>The sentence has {vowelCount} vowel(s).</p>
      )}
    </div>
  );
};
