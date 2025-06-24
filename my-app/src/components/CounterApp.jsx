import React from 'react';
import CounterContextProvider, { useCounterRESET } from '../contexts/CounterContext';
import Counter from './Counter';
import Statistics from './Statics';

function CounterAppContent() {
  const { resetAll } = useCounterRESET();
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>マルチカウンターアプリ</h1>
      
      <div>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <Counter id="counter1" label="カウンター1" />
          <Counter id="counter2" label="カウンター2" />
          <Counter id="counter3" label="カウンター3" />
        </div>
        
        <Statistics />
        
        <button 
          onClick={resetAll}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#ff6b6b', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          全てリセット
        </button>
      </div>
    </div>
  );
}

function CounterApp() {
  return (
    <CounterContextProvider>
      <CounterAppContent />
    </CounterContextProvider>
  );
}

export default CounterApp;