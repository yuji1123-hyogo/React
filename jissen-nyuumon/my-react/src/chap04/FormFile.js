import { useRef } from 'react';

export default function FormFile() {
  const file = useRef(null);

  function show() {
    const fs = file.current.files;
    for(const f of fs){
      console.log(`ファイル名：${f.name}`);
      console.log(`種類：${f.type}`);
      console.log(`サイズ：${Math.trunc(f.size / 1024)}KB`);
    }
  }

  return (
    <form>
      <input type="file" ref={file} multiple />
      <button type="button" onClick={show}>
        送信</button>
    </form>
  );
}
