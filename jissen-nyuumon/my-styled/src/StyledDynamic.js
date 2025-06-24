export default function StyledDynamic({ theme }) {
    return (
      <>
      <style jsx>{`
      .panel {
        width: 300px;
        padding: 10px;
        border: 1px solid #000;
        color: white;
      }
      `}
      </style>
      <style jsx>{`
      .panel {
        border-radius: ${theme.radius ? '10px' : '0px'};
        background-color: ${theme.color};
      }
      `}</style>
      <div className="panel"><b>Styled JSX</b>は、JSX式にスタイル定義を埋め込む形式のライブラリです。
      </div>
      </>
    );
  }