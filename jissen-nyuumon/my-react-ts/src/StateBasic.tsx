import { useState } from 'react';

type StateBasicProps = {
  init: number
};

export default function StateBasic({ init }: StateBasicProps) {
  const [count, setCount] = useState<number>(init);
  const handleClick = () => setCount(count + 1);
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </>
  );
}