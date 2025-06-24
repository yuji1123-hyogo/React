export default function ErrorFallback({ error, resetErrorBoundary }) {
  const handleClick = () => resetErrorBoundary();
  return (
    <div>
      <h4>以下のエラーが発生しました。</h4>
      <p>{error.message}</p>
      <button type="button" onClick={handleClick}>
        Retry
      </button>
    </div>
  );
}