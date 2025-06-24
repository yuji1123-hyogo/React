import { Suspense, lazy } from 'react';
import MyLoading from './MyLoading';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));
// const LazyButton = lazy(() => import('./LazyButton'));	

export default function LazyBasic() {
  return (
    <Suspense fallback={<p>Now Loading...</p>}>
      <LazyButton />
    </Suspense>

      // <Suspense fallback= {<MyLoading />}>
      //   <LazyButton />
      // </Suspense>
  );
}