import { Navigate, Outlet } from 'react-router-dom';

import SearchModal from './components/SearchModal';
import useCurrentUserStore from './modules/auth/current_user.state';
import Sidebar from './components/Sideber';
import { useEffect, useState } from 'react';
import { useNoteStore } from './modules/notes/notes.state';
import { noteRepository } from './modules/notes/note.repository';

export default function Layout() {
  const { currentUser } = useCurrentUserStore();
  const noteStore = useNoteStore();
  const [isLoading, setIsLoading] = useState(false);

  const fetchNotes = async () => {
    setIsLoading(true);
    const notes = await noteRepository.find(currentUser!.id);
    if (notes == null) return;

    noteStore.set(notes);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  if (currentUser == null) return <Navigate replace to="/signin" />;

  return (
    <div className="h-full flex">
      {!isLoading && <Sidebar />}
      <Outlet />
      <SearchModal />
    </div>
  );
}
