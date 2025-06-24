import { memo } from 'react';

export const MyButton = ({ id, handleClick, children }) => {
  console.log(`MyButton is called: ${id}`);
  return (
    <button onClick={handleClick}>{children}</button>
  );
};

export const MyCounter = ({ id, value }) => {
  console.log(`MyCounter is called: ${id}`);
  return (
    <p>現在値：{value}</p>
  );
};

// memo関数を使う場合
// export const MyButton = memo(({ id, handleClick, children }) => {
//   console.log(`MyButton is called: ${id}`);
//   return (
//     <button onClick={handleClick}>{children}</button>
//   );
// });

// export const MyCounter = memo(({ id, value }) => {
//   console.log(`MyCounter is called: ${id}`);
//   return (
//     <p>現在値：{value}</p>
//   );
// });