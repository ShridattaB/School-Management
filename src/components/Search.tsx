import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

function Search() {
  const [input, setInput] = useState('');
  const debouncedValue = useDebounce(input, 500);

  return (
    <>
      <h3>Search</h3>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />

      <p>Immediate: {input}</p>
      <p>Debounced: {debouncedValue}</p>
    </>
  );
}

export default Search;
