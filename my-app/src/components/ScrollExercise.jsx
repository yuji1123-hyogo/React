import { useRef } from 'react';

export default function ScrollExercise() {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
  
  // ここにrefを定義してください
  const colorRefs = useRef({})
  const setColorRef=(color)=>{
    return (element) => {
        if (element) {
            colorRefs.current[color] = element
        }
    }
  }

  function scrollToColor(color) {
    const element = colorRefs.current[color];
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center' 
      });
    }
  }

  return (
    <div>
      <h2>スクロール制御</h2>
      {/* ナビゲーションボタン */}
      <div style={{ 
        marginBottom: '20px',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        {colors.map(color => (
          <button
            key={color}
            onClick={() => scrollToColor(color)}
            style={{
              padding: '8px 16px',
              backgroundColor: color,
              color: color === 'yellow' ? 'black' : 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              textTransform: 'capitalize'
            }}
          >
            {color}
          </button>
        ))}
      </div>
      
      {/* スクロール可能なコンテナ */}
      <div style={{ height: '300px', overflow: 'auto', border: '1px solid #ccc' }}>
        {/* ここに色付きボックスを作成 */}
        {colors.map((color, index) => (
          <div
            key={color}
            ref={setColorRef(color)}
            style={{
              height: '200px',
              backgroundColor: color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              color: color === 'yellow' ? 'black' : 'white',
              textTransform: 'capitalize',
              borderBottom: index < colors.length - 1 ? '2px solid #fff' : 'none'
            }}
          >
            {color} Box
          </div>
        ))}
      </div>
    </div>
  );
}