import React, { useState } from 'react';

export const Task4 = () => {
  const [inputWord, setInputWord] = useState('');
  const [isPalindromeValue, setIsPalindromeValue] = useState(null);

  function isPalindrome(word) {
    const cleanWord = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedWord = cleanWord.split('').reverse().join('');
    return cleanWord === reversedWord;
  }

  const handleCheckPalindrome = () => {
    const cleanedWord = inputWord.trim();
    if (cleanedWord !== '') {
      setIsPalindromeValue(isPalindrome(cleanedWord));
    } else {
      setIsPalindromeValue(null);
    }
  };

  return (
    <div>
      <h2>Palindrome Checker</h2>
      <input
        type="text"
        value={inputWord}
        onChange={(e) => setInputWord(e.target.value)}
      />
      <button onClick={handleCheckPalindrome}>Check Palindrome</button>
      {isPalindromeValue !== null && (
        <p>
          "{inputWord}" is {isPalindromeValue ? 'a palindrome' : 'not a palindrome'}
        </p>
      )}
    </div>
  );
};


