import styled from 'styled-components';

export function MyButton({ className, children }) {
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}

export const MyStyledButton = styled(MyButton)`
  display: block;
  background-color: royalblue;
  color: white;
  font-weight: bold;
  width: 80px;
  height: 50px;
`;