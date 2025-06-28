import React, { useState } from 'react';

function ShoppingList() {
  // ここにstateを定義してください
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addItem=()=>{
    if (inputValue.trim() === '') return;

    const newItem = {
        id: Date.now(),
        name: inputValue.trim(),
        completed: false
    }

    setItems( prevItems => [...prevItems, newItem])
    setInputValue('')
  }

  const deleteItem=(itemId)=>{
    setItems(prevItems => prevItems.filter(item => item.id !== itemId))
  }

  const toggleCompleted=(itemId)=>{
    setItems(prevItems =>
        prevItems.map(item =>
            item.id === itemId
                ? {...item, completed: !item.completed}
                : item
        )
    )
  }
  
  const totalItems = items.length;
  const completedItems = items.filter(item => item.completed).length;

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px' }}>
      <h1>買い物リスト</h1>
      
      {/* 入力エリア */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="商品名を入力"
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button 
          onClick={addItem}
          style={{ padding: '8px 15px' }}
          >
          追加
        </button>
      </div>
      
      {/* 統計表示 */}
      <div style={{ marginBottom: '20px', fontSize: '14px', color: '#666' }}>
        {/* ここに統計を表示 */}
        {
            totalItems > 0 ? 
            (
                <>
                  {totalItems}個中{completedItems}個購入済み
                  {
                    completedItems === totalItems && totalItems > 0 && (
                    <span style={{ color: '#4CAF50', marginLeft: '10px' }}>
                        🎉 お疲れ様！
                    </span>
                  )}
                </>
            ):(
                '商品を追加してください'
            )
        }
      </div>
      
      {/* 商品リスト */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(item => (
          <li 
            key={item.id} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '10px 0',
              borderBottom: '1px solid #eee'
            }}
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleCompleted(item.id)}
              style={{ marginRight: '10px' }}
            />
            <span 
              style={{ 
                flex: 1,
                opacity: item.completed ? 0.5 : 1,
                textDecoration: item.completed ? 'line-through' : 'none'
              }}
            >
              {item.name}
            </span>
            <button 
              onClick={() => deleteItem(item.id)}
              style={{ 
                padding: '5px 10px', 
                backgroundColor: '#ff4444',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
      
      {/* 商品がない場合のメッセージ */}
      {items.length === 0 && (
        <div style={{ textAlign: 'center', color: '#999', marginTop: '40px' }}>
          まだ商品が追加されていません
        </div>
      )}
    </div>
  );
}

export default ShoppingList;