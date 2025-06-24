import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/');

  return (
    <>
      <p>Aboutページです。</p>
      <button type="button" onClick={handleClick}>
        トップへ移動</button>
    </>
  );
}