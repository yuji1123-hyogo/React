import { supabase } from '@/lib/supabase';
import { data } from 'react-router-dom';

export const authReapository = {
  async signup(name: string, email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    if (error != null || data.user == null) throw new Error(error?.message);
    return {
      ...data.user,
      userName: data.user.user_metadata.name,
    };
  },
  async signin(email: string, password: string) {
    console.log('email', email, 'password', password);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error != null || data.user == null) throw new Error(error?.message);
    return {
      ...data.user,
      userName: data.user.user_metadata.name,
    };
  },

  async getCurrentUser() {
    const { data, error } = await supabase.auth.getSession();
    if (error != null) return;
    if (data.session == null) return;
    return {
      ...data.session?.user,
      userName: data.session?.user.user_metadata.name,
    };
  },
};
