/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ■■chap02■■
import AppClass from './AppClass';
import './chap02/class.css';

// ■■chap03■■
import MyHello from './chap03/MyHello';
import EventBasic from './chap03/EventBasic';
import StateBasic from './chap03/StateBasic';
import books from './chap03/books';
import ForList from './chap03/ForList';
import ForNest from './chap03/ForNest';
import ForFilter from './chap03/ForFilter';
import ForSort from './chap03/ForSort';
import SelectStyle from './chap03/SelectStyle';
import StyledPanel from './chap03/StyledPanel';
import TitledPanel from './chap03/TitledPanel';
import ListTemplate from './chap03/ListTemplate';
import TypeProp, { Member } from './chap03/TypeProp';
import StateParent from './chap03/StateParent';
import EventMouse from './chap03/EventMouse';
import EventCompare from './chap03/EventCompare';
import EventError from './chap03/EventError';
import EventObj from './chap03/EventObj';
import EventPoint from './chap03/EventPoint';
import EventKey from './chap03/EventKey';
import EventArgs from './chap03/EventArgs';
import EventArgs2 from './chap03/EventArgs2';
import EventPropagation from './chap03/EventPropagation';
import EventOnce from './chap03/EventOnce';
import EventPassive from './chap03/EventPassive';

// ■■chap04■■
import StateForm from './chap04/StateForm';
import StateFormUC from './chap04/StateFormUC';
import FormTextarea from './chap04/FormTextarea';
import FormSelect from './chap04/FormSelect';
import FormList from './chap04/FormList';
import FormRadio from './chap04/FormRadio';
import FormCheck from './chap04/FormCheck';
import FormCheckMulti from './chap04/FormCheckMulti';
import FormFile from './chap04/FormFile';
import StateNest from './chap04/StateNest';
import StateNestImmer from './chap04/StateNestImmer';
import StateNestImmer2 from './chap04/StateNestImmer2';
import StateTodo from './chap04/StateTodo';
import FormBasic from './chap04/FormBasic';
import FormYup from './chap04/FormYup';
import FormJapan from './chap04/FormJapan';

// ■■chap05■■
import LazyBasic from './chap05/LazyBasic';
import LazyMulti from './chap05/LazyMulti';
import SuspenseSimple from './chap05/SuspenseSimple';
import SuspenseResult from './chap05/SuspenseResult';
import ProfilerBasic from './chap05/ProfilerBasic';
import StyledComp from './chap05/StyledComp';
import { MyButton, MyStyledButton } from './chap05/StyledComp2';
import StyledCommon from './chap05/StyledCommon';
import GlobalStyle from './chap05/StyledGlobal';
import StyledProps from './chap05/StyledProps';
import EmotionJsx from './chap05/EmotionJsx';
import EmotionComp from './chap05/EmotionComp';
/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import PortalBasic from './chap05/PortalBasic';
import ErrorRoot from './chap05/ErrorRoot';
import ErrorRetryRoot from './chap05/ErrorRetryRoot';
import ErrorEventRoot from './chap05/ErrorEventRoot';

// ■■chap06■■
import MaterialBasic from './chap06/MaterialBasic';
import MaterialDrawer from './chap06/MaterialDrawer';
import MaterialGrid from './chap06/MaterialGrid';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './chap06/theme';
import MaterialMode from './chap06/MaterialMode';
import FormMui from './chap06/FormMui';
import QueryPre from './chap06/QueryPre';
import { QueryClient, QueryClientProvider } from 'react-query';
import QueryBasic from './chap06/QueryBasic';
import { ErrorBoundary } from 'react-error-boundary';
import QuerySuspense from './chap06/QuerySuspense';

// ■■chap07■■
import StateEffect from './chap07/StateEffect';
import HookTimer from './chap07/HookTimer';
import HookEffect from './chap07/HookEffect';
import HookRefNg from './chap07/HookRefNg';
import HookRef from './chap07/HookRef';
import HookRefForward from './chap07/HookRefForward';
import HookCallbackRef from './chap07/HookCallbackRef';
import HookReducer from './chap07/HookReducer';
import HookReducerUp from './chap07/HookReducerUp';
import HookReducerInit from './chap07/HookReducerInit';
import HookContext from './chap07/HookContext';
import MyThemeProvider from './chap07/MyThemeProvider';
import HookThemeButton from './chap07/HookThemeButton';
import { RecoilRoot } from 'recoil';
import RecoilCounter from './chap07/RecoilCounter';
import RecoilTodo from './chap07/RecoilTodo';
import RecoilTodoUp from './chap07/RecoilTodoUp';
import HookMemo from './chap07/HookMemo';
import HookTransition from './chap07/HookTransition';
import HookDeferred from './chap07/HookDeferred';
import HookDeferredTransition from './chap07/HookDeferredTransition';
import HookCustom from './chap07/HookCustom';

// ■■chap08■■
// New Router
import { RouterProvider } from 'react-router-dom';
import routesBasic from './chap08/routesBasic';
import routesLink from './chap08/routesLink';
import routesParam from './chap08/routesParam';
import routesHandle from './chap08/routesHandle';
import { HelmetProvider } from 'react-helmet-async';
import routesMyLink from './chap08/routesMyLink';
import routesScroll from './chap08/routesScroll';

// ■■column■■
import MyStore from './column/MyStore';
/* eslint-enable no-unused-vars */

const root = ReactDOM.createRoot(document.getElementById('root'));

// #region ■■chap02■■
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// setInterval(() => {
//   root.render(
//     <p>現在時刻：{(new Date()).toLocaleString()}</p>
//   );
// }, 1000);

// root.render(
//   <React.StrictMode>
//     <AppClass />
//   </React.StrictMode>
// );

// root.render(
//   <>
//     <p>こんにちは、世界！</p>
//     <p>はじめまして、React！！</p>
//   </>
// );

// const name  = '鈴木';
// root.render(
//   <p>こんにちは、{name}です！</p>
// );

// const content = `<h3>WINGSプロジェクト</h3>
//   <img src="https://wings.msn.to/image/wings.jpg" />`;
// root.render(
//   <p>{content}</p>
//   // <p dangerouslySetInnerHTML={{__html: content}}></p>
// );

// root.render(
//   <div>{'Tom &amp; Jerry'}</div>
//   // <div>Tom &amp; Jerry</div>
//   // <div>{'Tom \u0026 Jerry'}</div>
//   // <div>{`Tom ${String.fromCodePoint(38)} Jerry`}</div>
//   // <div dangerouslySetInnerHTML={{__html: 'Tom &amp; Jerry'}} />
// );

// root.render(
//   <ul>
//     <li>{true}</li>
//     <li>{false}</li>
//     <li>{undefined}</li>
//     <li>{null}</li>
//     <li>{0}</li>
//     <li>{String(true)}</li>
//   </ul>
// );

// const dest = 'https://ja.react.dev/';

// root.render(
//   <a href={dest}>React本家サイト</a>
// );

// const attrs = {
//   href: 'https://wings.msn.to/',
//   download: false,
//   target: '_blank',
//   rel: 'help'
// };

// root.render(
//   // <a href={attrs.href} download={attrs.download}
//   //   target={attrs.target} rel={attrs.rel}>サポートページへ</a>
//   <a {...attrs}>サポートページへ</a>
// );

// root.render(
//   <a href="index.html" download>トップへ</a>
//   // <a href="index.html" download={true}>トップへ</a>
// );

// // const props = 'color: White; background-color: Blue; padding: 3px';
// const props = {
//   color: 'White',
//   backgroundColor: 'Blue',
//   padding: 3
// };

// root.render(
//   <p style={props}>WINGSプロジェクト</p>
// );

// root.render(
//   <p className="hoge">WINGSプロジェクト</p>
// );

// const title = 'これからはじめるVue.js 3実践入門';

// root.render(
//   <div className="main">
//     <p>「{title}」（SBクリエイティブ刊）</p>
//     <img src="https://wings.msn.to/books/978-4-8156-1336-5/978-4-8156-1336-5.jpg"
//       alt={title} />
//     絶賛発売中！
//   </div>
// );

// root.render(
//   React.createElement(
//     'div',
//     { className: 'main' },
//     React.createElement(
//       'p',
//       null,
//       `「${title}」（SBクリエイティブ刊）`
//     ),
//     React.createElement(
//       'img',
//       {
//         src: 'https://wings.msn.to/books/978-4-8156-1336-5/978-4-8156-1336-5.jpg' ,
//         alt: title
//       }
//     ),
//     '絶賛発売中！'
//   )
// );
// #endregion

// #region ■■chap03■■
// root.render(
//   <MyHello myName="鈴木" />
//   // <MyHello />
// );

// root.render(
//   <EventBasic type="time" />
// );

// root.render(
//   <StateBasic init={0} />
// );

// root.render(
//   <ForList src={books} />
// );

// root.render(
//   <ForNest src={books} />
// );

// root.render(
//   <ForFilter src={books} />
// );

// root.render(
//   <ForSort src={books} />
// );

// root.render(
//   <SelectStyle mode="light" />
// );

// root.render(
//   <StyledPanel>
//     <p>メンバー募集中！</p>
//     <p>ようこそ、WINGSプロジェクトへ！！</p>
//     {/* <MyHello myName="鈴木" /> */}
//   </StyledPanel>
// );

// root.render(<TitledPanel
//   title={
//     <p>メンバー募集中！</p>
//   }
//   body={
//     <p>ようこそ、WINGSプロジェクトへ！！</p>
//   }>
// </TitledPanel>);

// const title = <p>メンバー募集中！</p>;
// const body = <p>ようこそ、WINGSプロジェクトへ！！</p>;
// root.render(
//   <TitledPanel title={title} body={body}></TitledPanel>
// );

// root.render(
//   <TitledPanel>
//     <p key="title">メンバー募集中！</p>
//     <p key="body">ようこそ、WINGSプロジェクトへ！！</p>
//   </TitledPanel>
// );

// root.render(
//   <ListTemplate src={books}>
//   { elem => (
//     <>
//       <dt>
//         <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
//             {elem.title}（{elem.price}円）
//         </a>
//       </dt>
//       <dd>{elem.summary}</dd>
//     </>
//   )}
//   </ListTemplate>
// );

// root.render(
//   <ListTemplate src={books} render={ elem => (
//     <>
//       <dt>
//         <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
//             {elem.title}（{elem.price}円）
//         </a>
//       </dt>
//       <dd>{elem.summary}</dd>
//     </>
//   )}/>
// );

// （1）PropTypes.instanceOf
// root.render(
//   <TypeProp prop1={new Member()} />
//   // <TypeProp prop1="hoge" />
// );

// （2）PropTypes.oneOf
// root.render(
//   <TypeProp prop2="男性" />
//   // <TypeProp prop2="hoge" />
// );

// （3）PropTypes.oneOfType
// root.render(
//   <TypeProp prop3="鈴木花子" />
//   // <TypeProp prop3={new Member()} />
// );

// （4）PropTypes.arrayOf
// root.render(
//     <TypeProp prop4={[15, 30]} />
//   // <TypeProp prop4={[333, '鈴木花子']} />
// );

// （5）ProtoTypes.objectOf
// root.render(
//   <TypeProp prop5={{ '鈴木花子': 15, '佐藤雫': 30 }} />
//   // <TypeProp prop5={{ '鈴木花子': 15, '佐藤雫': '三十' }} />
// );

// （6）PropTypes.shape
// root.render(
//   <TypeProp prop6={{ name: '鈴木花子', age: 35, sex: '女性', blood: 'A' }} />
//   // <TypeProp prop6={{ age: 35, sex: '女性' }} />
// );

// （7）PropTypes.exact
// root.render(
//   <TypeProp prop7={{ name: '鈴木花子', age: 35, sex: '女性', blood: 'A' }} />
// );

// root.render(
//   <StateParent />
// );

// root.render(
//   <EventMouse
//     alt="ロゴ画像"
//     beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
//     afterSrc="https://www.web-deli.com/image/home_chara.gif" />
// );

// root.render(
//   <EventCompare />
// );

// root.render(
//   <EventError src="./image/wings.jpg"
//     alt="サンプル画像" />
// );

// root.render(
//   <EventObj />
// );

// root.render(
//   <EventPoint />
// );

// root.render(
//   <EventKey />
// );

// root.render(
//   <EventArgs />
// );

// root.render(
//   <EventArgs2 />
// );

// root.render(
//   <EventPropagation />
// );

// root.render(
//   <EventOnce />
// );

// root.render(
//   <EventPassive />
// );
// #endregion

// #region ■■chap04■■
// root.render(
//   <StateForm />
// );

// root.render(
//   <StateFormUC />
// );

// root.render(
//   <FormTextarea />
// );

// root.render(
//   <FormSelect />
// );

// root.render(
//   <FormList />
// );

// root.render(
//   <FormRadio />
// );

// root.render(
//   <FormCheck />
// );

// root.render(
//   <FormCheckMulti />
// );

// root.render(
//   <FormFile />
// );

// root.render(
//   <StateNest />
// );

// root.render(
//   <StateNestImmer />
// );

// root.render(
//   <StateNestImmer2 />
// );

// root.render(
//   <StateTodo />
// );

// root.render(
//   <FormBasic />
// );

// root.render(
//   <FormYup />
// );

// root.render(
//   <FormJapan />
// );
// #endregion

// #region ■■chap05■■
// root.render(
//   <LazyBasic />
// );

// root.render(
//   <LazyMulti />
// );

// root.render(
//   <SuspenseSimple />
// );

// root.render(
//   <SuspenseResult />
// );

// root.render(
//   <ProfilerBasic />
// );

// root.render(
//   <StyledComp />
// );

// root.render(
//   <>
//     <MyButton>ボタン</MyButton>
//     <MyStyledButton>ボタン</MyStyledButton>
//   </>
// );

// root.render(
//   <StyledCommon />
// );

// root.render(
//   <>
//     <GlobalStyle />
//     <StyledComp />
//   </>
// );

// root.render(
//   <StyledProps />
// );

// root.render(
//   <EmotionJsx />
// );

// root.render(
//   <EmotionComp />
// );

// const global = css`
//   body {
//     background-color: Yellow;
//   }
// `;

// root.render(
//   <>
//     <Global styles={global} />
//     <EmotionJsx />
//   </>
// );

// root.render(
//   <>
//     <div id="dialog"></div>
//     <PortalBasic />
//   </>
// );

// root.render(
//   <ErrorRoot />
// );

// root.render(
//   <ErrorRetryRoot />
// );

// root.render(
//   <ErrorEventRoot />
// );
// #endregion

// #region ■■chap06■■
// root.render(
//   <MaterialBasic />
// );

// root.render(
//   <MaterialDrawer />
// );

// root.render(
//   <MaterialGrid />
// );

// root.render(
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <MaterialBasic />
//   </ThemeProvider>
// );

// root.render(
//   <MaterialMode />
// );

// root.render(
//   <FormMui />
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

// const cli = new QueryClient({
//   defaultOptions: {
//     queries: {
//       suspense: true,
//     },
//   },
// });

// root.render(
//   <Suspense fallback={<p>Loading...</p>}>
//     <ErrorBoundary fallback={<div>エラーが発生しました。</div>}>
//       <QueryClientProvider client={cli}>
//         <QuerySuspense />
//       </QueryClientProvider>
//     </ErrorBoundary>
//   </Suspense>
// );
// #endregion

// #region ■■chap07■■
// root.render(
//   <StateEffect init={0} />
// );

// root.render(
//   <HookTimer init={10} />
// );

// root.render(
//   <HookEffect init={10} />
// );

// root.render(
//   <HookRefNg />
// );

// root.render(
//   <HookRef />
// );

// root.render(
//   <HookRefForward />
// );

// root.render(
//   <HookCallbackRef />
// );

// root.render(
//   <HookReducer init={0} />
// );

// root.render(
//   <HookReducerUp init={0} />
// );

// root.render(
//   <HookReducerInit init={0} />
// );

// root.render(
//   <HookContext />
// );

// root.render(
//   <MyThemeProvider>
//     <HookThemeButton />
//   </MyThemeProvider>
// );

// root.render(
//   <RecoilRoot>
//     <RecoilCounter />
//   </RecoilRoot>
// );

// root.render(
//   <RecoilRoot>
//     <RecoilTodo />
//   </RecoilRoot>
// );

// root.render(
//   <RecoilRoot>
//     <RecoilTodoUp />
//   </RecoilRoot>
// );

// root.render(
//   <HookMemo />
// );

// root.render(
//   <HookTransition />
// );

// root.render(
//   <HookDeferred />
// );

// root.render(
//   <HookDeferredTransition />
// );

// root.render(
//   <HookCustom />
// );
// #endregion

// #region ■■chap08■■
// root.render(
//   <RouterProvider router={routesBasic} />
// );

// root.render(
//   <RouterProvider router={routesLink} />
// );

// root.render(
//   <RouterProvider router={routesParam} />
// );

// root.render(
//   <HelmetProvider>
//     <RouterProvider router={routesHandle} />
//   </HelmetProvider>
// );

// root.render(
//   <RouterProvider router={routesMyLink} />
// );

// root.render(
//   <RouterProvider router={routesScroll} />
// );
// #endregion

// #region ■■column■■
// root.render(
//   <MyStore />
// );
// #endregion


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
