import { supabase } from '../config/supabase.js';

export async function register(email, password) {
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });
  if (error) throw { status: 400, message: error.message };
  return data.user;
}

export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw { status: 401, message: 'Credenciais inválidas.' };
  return data;
}

export async function logout(token) {
  const { error } = await supabase.auth.admin.signOut(token);
  if (error) throw { status: 500, message: error.message };
}
