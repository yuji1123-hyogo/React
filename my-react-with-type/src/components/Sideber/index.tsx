import React from 'react';
import UserItem from './UserItem';
import Item from './Item';
import NoteList from '../NoteList';
import useCurrentUserStore from '@/modules/auth/current_user.state';
import { useNoteStore } from '@/modules/notes/notes.state';
import { noteRepository } from '@/modules/notes/note.repository';
import { Plus, Search } from 'lucide-react';

export default function Sidebar() {
  const currentUserStore = useCurrentUserStore();
  const noteStore = useNoteStore();

  const createNote = async () => {
    const newNote = await noteRepository.create(
      currentUserStore.currentUser!.id,
      {}
    );
    noteStore.set([newNote]);
    console.log('newNote', newNote);
  };

  return (
    <>
      <aside className="group/sidebar h-full bg-neutral-100 overflow-y-auto relative flex flex-col w-60">
        <div>
          <div>
            <UserItem />
            <Item onClick={() => {}} label="検索" icon={Search} />
          </div>
          <div className="mt-4">
            <NoteList />
            <Item onClick={createNote} label="ノートを作成" icon={Plus} />
          </div>
        </div>
      </aside>
      <div className="absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]"></div>
    </>
  );
}
