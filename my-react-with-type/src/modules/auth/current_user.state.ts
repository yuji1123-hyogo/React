import { User } from '@supabase/supabase-js';
import { atom, useAtom } from 'jotai';

const currentUserAtom = atom<User>();

const useCurrentUserStore = () => {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  return { currentUser, set: setCurrentUser };
};

export default useCurrentUserStore;
