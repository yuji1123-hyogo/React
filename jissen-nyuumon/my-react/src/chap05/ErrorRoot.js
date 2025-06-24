import { ErrorBoundary } from 'react-error-boundary';
import ErrorThrow from './ErrorThrow';

export default function ErrorRoot() {
  return (
    <>
      <h3>Error Boundaryの基本</h3>
      <ErrorBoundary
        // onError={err => alert(err.message)}
        fallback={<div>エラーが発生しました。</div>}
      >
        <ErrorThrow />
      </ErrorBoundary>
    </>
  );
}