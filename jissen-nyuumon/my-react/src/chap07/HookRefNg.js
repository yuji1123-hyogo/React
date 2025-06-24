import { useState } from 'react';

export default function HookRefNg() {
  let id = null;
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (id === null) {
      id = setInterval(() => setCount(c => c + 1), 1000);
    }
  };
  const handleEnd = () => {
    clearInterval(id);
    id = null;
  };

  return (
    <>
      <button onClick={handleStart}>開始</button>
      <button onClick={handleEnd}>終了</button>
      <p>{count}秒経過</p>
    </>
  );
}