import { Link } from 'react-router-dom';

export default function InfoPage() {
  return (
    <>
    <p>Infoページです。</p>
    <Link to="..">トップ</Link>
    {/* <Link to=".." relative="path">トップ</Link> */}
    {/* <Link to="/" reloadDocument>トップ</Link> */}
    </>
  );
}