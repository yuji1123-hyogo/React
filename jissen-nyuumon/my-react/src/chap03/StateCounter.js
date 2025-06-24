import './StateCounter.css';

export default function StateCounter({ step, onUpdate }) {
  const handleClick = () => onUpdate(step);
  return (
    <button className="cnt" onClick={handleClick}>
      <span>{step}</span>
    </button>
  );
}