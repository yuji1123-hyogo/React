import { Suspense } from 'react';
import ThrowPromise from './ThrowPromise';

export default function SuspenseSimple() {
  return (
    <Suspense fallback={<p>Now Loading...</p>}>
      <ThrowPromise />
    </Suspense>
  );
}