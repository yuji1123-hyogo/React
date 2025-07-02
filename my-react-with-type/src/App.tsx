import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import NoteDetail from './pages/NoteDetail';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import useCurrentUserStore from './modules/auth/current_user.state';
import { authReapository } from './modules/auth/auth.repository';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const currentUserStore = useCurrentUserStore();

  const setSession = async () => {
    const currentUser = await authReapository.getCurrentUser();
    currentUserStore.set(currentUser);
    setIsLoading(false);
  };

  useEffect(() => {
    setSession();
  }, []);

  if (isLoading) return <div />;

  return (
    <BrowserRouter>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/notes/:id" element={<NoteDetail />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
