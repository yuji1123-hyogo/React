/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateBasic from './StateBasic';
import StyledPanel from './StyledPanel';
import ListTemplate from './ListTemplate';
import books from './books';
import type { Book } from './Book';
import MyThemeProvider from './MyThemeProvider';
import HookThemeButton from './HookThemeButton';
import HookReducerUp from './HookReducerUp';
import StateFormUC from './StateFormUC';
import QueryPre from './QueryPre';
import { QueryClient, QueryClientProvider } from 'react-query';
import QueryBasic from './QueryBasic';
/* eslint-enable @typescript-eslint/no-unused-vars */

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
  <StateBasic init={0} />
);

// root.render(
//   <StyledPanel>
//     <p>メンバー募集中！</p>
//     <p>ようこそ、WINGSプロジェクトへ！！</p>
//   </StyledPanel>
// );

// root.render(
//   <ListTemplate src={books}>
//   {(elem: Book) => (
//     <>
//     <dt>
//       <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
//           {elem.title}（{elem.price}円）
//       </a>
//     </dt>
//     <dd>{elem.summary}</dd>
//     </>
//   )}
//   </ListTemplate>
// );

// root.render(
//   <MyThemeProvider>
//     <HookThemeButton />
//   </MyThemeProvider>
// );

// root.render(
//   <HookReducerUp init={0} />
// );

// root.render(
//   <StateFormUC />
// );

// root.render(
//   <QueryPre />
// );

// const cli = new QueryClient();
// root.render(
//   <QueryClientProvider client={cli}>
//     <QueryBasic />
//   </QueryClientProvider>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
