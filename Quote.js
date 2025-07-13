// src/components/Quote.js
import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(data => setQuote(data.content));
  }, []);

  return (
    <div>
      <h3>💡 Daily Motivation:</h3>
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
