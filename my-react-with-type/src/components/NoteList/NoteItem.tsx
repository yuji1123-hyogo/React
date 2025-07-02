import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import {
  ChevronDown,
  ChevronRight,
  FileIcon,
  MoreHorizontal,
  Plus,
  Trash,
} from 'lucide-react';
import { useState } from 'react';
import Item from '../Sideber/Item';
import { Note } from '@/modules/notes/note.entity';
import { cn } from '@/lib/utils';

interface Props {
  note: Note;
  onCreate?: (event: React.MouseEvent) => void;
  onExpand?: (event: React.MouseEvent) => void;
}

export function NoteItem({ note, onExpand, onCreate }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    return isHovered ? ChevronRight : FileIcon;
  };

  const menu = (
    <div
      className={cn(
        'ml-auto flex items-center gap-x-2',
        !isHovered && 'opacity-0'
      )}
    >
      <DropdownMenu>
        <DropdownMenuTrigger onClick={(e) => e.stopPropagation()}>
          <div
            className="h-full ml-auto rounded-sm hover:bg-neutral-300"
            role="button"
          >
            <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-60"
          align="start"
          side="right"
          forceMount
        ></DropdownMenuContent>
      </DropdownMenu>
      <div
        className="h-full ml-auto rounded-sm hover:bg-neutral-300"
        role="button"
        onClick={onCreate}
      >
        <Plus className="w-4 h-4 text-muted-foreground" />
      </div>
    </div>
  );

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {}}
      role="button"
    >
      <Item
        label={note.title ?? '無題'}
        icon={getIcon()}
        trailingItem={menu}
        isActive={isHovered}
        onIconClick={onExpand}
      />
    </div>
  );
}
