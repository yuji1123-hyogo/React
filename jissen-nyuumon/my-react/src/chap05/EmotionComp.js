/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const MyPanel = styled.div`
  width: 300px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: royalblue;
  color: white;
`;

export default function EmotionComp() {
  return (
    <MyPanel><b>Styled JSX</b>は、JSX式にスタイル定義を埋め込む形式のライブラリです。</MyPanel>
  );
}