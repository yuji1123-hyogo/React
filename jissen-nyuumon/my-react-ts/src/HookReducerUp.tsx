import { useReducer } from 'react';

type HookReducerUpProps = {
  init: number
};

type StateType = {
  count: number;
};

type ActionType = {
  type: 'update',
  step: number
} | {
  type: 'reset',
  init: number
};

type CountReducerType = (state: StateType, action: ActionType) => StateType;

export default function HookReducerUp({ init }: HookReducerUpProps) {
  const [state, dispatch] = useReducer<CountReducerType>(
    (state, action) => {
      switch (action.type) {
        case 'update':
          return { count: state.count + action.step };
        case 'reset' :
          return { count: action.init };
        default:
          return state;
      }
    },
    {
      count: init
    }
  );
  const handleUp = () => dispatch({ type: 'update', step: 1 });
  const handleDown = () => dispatch({ type: 'update', step: -1 });
  const handleReset = () => dispatch({ type: 'reset', init: 0 });

  return (
  <>
    <button onClick={handleUp}>カウントアップ</button>
    <button onClick={handleDown}>カウントダウン</button>
    <button onClick={handleReset}>リセット</button>
    <p>{state.count}回、クリックされました。</p>
  </>
);
}