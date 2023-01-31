import { redirect } from 'next/navigation';

import { createServerClient } from '../utils/supabase-server';

// do not cache this page
export const revalidate = 0;

// this page will display with or without a user session
export default async function OptionalSession() {
  // const supabase = createServerClient();
  // const { data: { user }} = await supabase.auth.getUser();
  // if(!user) {
  //   return redirect('/login')
  // } else {
  // }
  return redirect('/boxoffice')
  // const { data } = await supabase.from('posts').select('*');

  return <pre>{JSON.stringify({ user }, null, 2)}</pre>;
}