// components/Statistics.js - 統計表示
import React from 'react';
import { useCounterState } from '../contexts/CounterContext';

function Statistics() {
  // TODO: 統計情報を取得
  const counts = useCounterState()
  const countValues = Object.values(counts)
  const total = countValues.reduce((sum,values) => sum + values, 0)
  const average = countValues.length > 0 ? total / countValues.length : 0
  
  return (
    <div style={{ 
      backgroundColor: '#f8f9fa', 
      padding: '15px', 
      borderRadius: '8px',
      margin: '20px 0'
    }}>
      <h3>統計情報</h3>
      <div style={{ display: 'flex', gap: '30px' }}>
        <div>
          <strong>合計値:</strong> {total}
        </div>
        <div>
          <strong>平均値:</strong> {average.toFixed(1)}
        </div>
      </div>
    </div>
  );
}

export default Statistics;