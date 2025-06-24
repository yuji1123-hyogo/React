import { useRef, useEffect } from 'react';
import './EventPassive.css';

export default function EventPassive() {
  const handleWheel = e => e.preventDefault();
  const divRef = useRef(null);
  useEffect(() => {
    const div = divRef.current;
    div.addEventListener('wheel', handleWheel, { passive: false });
    return (() => {
      div.removeEventListener('wheel', handleWheel);
    });
  });

  return (
    <div className="box"
      ref={divRef} 
      // onWheel={handleWheel}
    >
      たとえばwheelイベントをハンドラーで処理する状況を考えてみましょう。wheelイベントの既定の動作は、ページ／要素のスクロールです。
    </div>
  );
}