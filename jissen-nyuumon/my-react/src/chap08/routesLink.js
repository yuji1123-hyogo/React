import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RouterApp from './RouterApp';
import TopPage from './TopPage';
import ArticlePage from './ArticlePage';
import AboutPage from './AboutPage';
import InfoPage from './InfoPage';
import RouterNav from './RouterNav';

// const routesLink = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RouterApp />}>
//       {/* <Route path="" element={<TopPage />} /> */}
//       <Route index element={<TopPage />} />
//       <Route path="article" element={<ArticlePage />} />
//       <Route path="about" element={<AboutPage />} />
//     </Route>
//   )
// );

// const routesLink = createBrowserRouter([
//   { path: '/', element: <RouterApp />,
//     children: [
//       { path: '', element: <TopPage /> },
//       { path: 'article', element: <ArticlePage /> },
//       { path: 'about', element: <AboutPage /> },
//     ]
//   }
// ]);

const routesLink = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<RouterApp />}
      // element={<RouterNav />}
    >
      <Route path="/" element={<TopPage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/article/info" element={<InfoPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);

export default routesLink;