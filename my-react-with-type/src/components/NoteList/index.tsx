import { cn } from '@/lib/utils';
import { NoteItem } from './NoteItem';
import { noteRepository } from '@/modules/notes/note.repository';
import { Note } from '@/modules/notes/note.entity';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useNoteStore } from '@/modules/notes/notes.state';
import useCurrentUserStore from '@/modules/auth/current_user.state';

interface NoteListProps {
  layer?: number;
  parentId?: number;
}

export default function NoteList({ layer = 0, parentId }: NoteListProps) {
  const params = useParams();
  const id = params.id != null ? parseInt(params.id) : undefined;
  const navigate = useNavigate();
  const noteStore = useNoteStore();
  const notes = noteStore.getAll();
  const { currentUser } = useCurrentUserStore();
  const [expanded, setExpanded] = useState<Map<number, boolean>>(new Map());

  const createChild = async (e: React.MouseEvent, parentId: number) => {
    e.stopPropagation();
    const newNote = await noteRepository.create(currentUser!.id, { parentId });
    noteStore.set([newNote]);
    setExpanded((prev) => prev.set(parentId, true));
    moveToDetail(newNote.id);
  };

  const fetchChildren = async (e: React.MouseEvent, note: Note) => {
    e.stopPropagation();
    const children = await noteRepository.find(currentUser!.id, note.id);
    if (children == null) return;
    noteStore.set(children);
    setExpanded((prev) => {
      const newExpanded = new Map(prev);
      newExpanded.set(note.id, !prev.get(note.id));
      return newExpanded;
    });
  };

  const moveToDetail = (noteId: number) => {
    navigate(`/notes/${noteId}`);
  };

  return (
    <>
      <p
        className={cn(
          `hidden text-sm font-medium text-muted-foreground/80`,
          layer === 0 && 'hidden'
        )}
        style={{ paddingLeft: layer ? `${layer * 12 + 25}px` : undefined }}
      >
        ページがありません
      </p>
      {notes
        .filter((note) => note.parent_document == parentId)
        .map((note) => {
          return (
            <div key={note.id}>
              <NoteItem
                note={note}
                onExpand={(e: React.MouseEvent) => fetchChildren(e, note)}
                onCreate={(e) => createChild(e, note.id)}
              />
              {expanded.get(note.id) && (
                <NoteList layer={layer + 1} parentId={note.id} />
              )}
            </div>
          );
        })}
    </>
  );
}
