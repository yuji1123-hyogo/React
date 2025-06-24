import { useRecoilState } from 'recoil';
// import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { useRecoilState, useResetRecoilState } from 'recoil';
import { counterAtom } from '../store/atom';

export default function RecoilCounter() {
  const [counter, setCounter] = useRecoilState(counterAtom);
  // const counter = useRecoilValue(counterAtom);
  // const setCounter = useSetRecoilState(counterAtom);

  // const resetCounter = useResetRecoilState(counterAtom);

  const handleClick = () => {
    setCounter(c => c + 1);
    // setCounter(counter + 1);
  };

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      {/* <button onClick={() => resetCounter()}>リセット</button> */}
      <p>{counter}回、クリックされました。</p>
    </>
  );
}