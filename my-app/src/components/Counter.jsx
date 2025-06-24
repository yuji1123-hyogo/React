
// components/Counter.js - 個別カウンター
import React from 'react';
import { COUNTER_ACTIONS, useCounterDispatch, useCounterState } from '../contexts/CounterContext';

function Counter({ id, label }) {
  // TODO: カスタムフックを使って状態と操作を取得 
  const counts = useCounterState()
  const counterDispatch = useCounterDispatch()
  const count = counts[id]

  return (
    <div style={{ 
      border: '1px solid #ddd', 
      padding: '15px', 
      borderRadius: '8px',
      textAlign: 'center',
      minWidth: '150px'
    }}>
      <h3>{label}</h3>
      <div style={{ fontSize: '24px', margin: '10px 0' }}>
        {count}
      </div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button 
          // TODO: デクリメント機能を実装
          onClick={()=> counterDispatch({type:COUNTER_ACTIONS.DECREMENT, counterId:id})}
          style={{ 
            padding: '5px 15px', 
            backgroundColor: '#74b9ff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        >
          -1
        </button>
        <button 
          // TODO: インクリメント機能を実装
          onClick={()=> counterDispatch({type:COUNTER_ACTIONS.INCREMENT, counterId:id})}
          style={{ 
            padding: '5px 15px', 
            backgroundColor: '#00b894', 
            color: 'white', 
            border: 'none', 
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        >
          +1
        </button>
      </div>
    </div>
  );
}

export default Counter;