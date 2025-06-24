import { Link, Outlet } from 'react-router-dom';

export default function RouterApp() {
  return (
    <>
      <ul>
        <li><Link to="/">トップ</Link></li>
        <li><Link to="/article">公開記事</Link></li>
        <li><Link to="/about">このサイトについて</Link></li>
        {/* <li><Link to="/about" replace>このサイトについて</Link></li> */}
        <li><Link to="/article/info">Infoページ</Link></li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}