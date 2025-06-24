import styled from 'styled-components';

const MyPanel = styled.div`
  width: 300px;
  padding: 10px;
  border: 1px solid #000;
  color: white;
  border-radius: ${ props => (props.theme.radius ? '10px' : '0px') };
  background-color: ${ props => props.theme.color };
`;

export default function StyledProps({ theme }) {
  return (
    <MyPanel theme={{
      radius: true,
      color: 'royalblue'
    }}><b>Styled JSX</b>は、JSX式にスタイル定義を埋め込む形式のライブラリです。</MyPanel>
  );
}