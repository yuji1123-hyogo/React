import { useEffect, useState } from 'react';

export default function StateEffect({ init }) {
  const [count, setCount] = useState(init);
  const [hoge, setHoge] = useState('hoge');
  useEffect(() => {
    console.log(`count is ${count}.`);
  }, [count]);
  const handleClick = () => setCount(count + 1);

  return (
    <>
      <button onClick={() => setHoge(Date.now())}>Hoge ({hoge})</button>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </>
  );
}