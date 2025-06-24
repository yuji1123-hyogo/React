import { ErrorBoundary } from 'react-error-boundary';
import ErrorRetryThrow from './ErrorRetryThrow';
import ErrorFallback from './ErrorFallback';

export default function ErrorRetryRoot() {
  const handleFallback = ({ error, resetErrorBoundary }) => {
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
  };
  const handleReset = () => console.log('Retry!!');

  return (
    <>
      <h3>Error Boundaryの基本</h3>
      <ErrorBoundary
        onReset={handleReset}
        fallbackRender={handleFallback}
        // FallbackComponent={ErrorFallback}
      >
        <ErrorRetryThrow />
      </ErrorBoundary>
    </>
  );
}