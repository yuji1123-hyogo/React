import { createContext } from 'react';
import { HookContextChild } from './HookContextChild';

export const MyAppContext = createContext();
const config = {
  title: 'React入門',
  lang: 'ja-JP',
};

export default function HookContext() {
  return (
    <MyAppContext.Provider value={config}>
      <div id="c_main">
        <HookContextChild />
      </div>
    </MyAppContext.Provider>
  );
}