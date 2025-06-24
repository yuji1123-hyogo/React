export default function EventObj() {
  const handleClick = e => console.log(e);
  return (
    <button onClick={handleClick}>クリック</button>
  );
}