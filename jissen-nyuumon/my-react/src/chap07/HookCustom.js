import useCounter from './UseCounter';

export default function HookCustom() {
  const [state, handleUp, handleDown, handleReset] = useCounter(0, 1);
  return (
    <>
      <button onClick={handleUp}>カウントアップ</button>
      <button onClick={handleDown}>カウントダウン</button>
      <button onClick={handleReset}>リセット</button>
      <p>{state.count}回、クリックされました。</p>
    </>
  );
}