import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export const fetchProductions = async () => {
  const { data: productions } = await supabase.from('production').select('*')
  await productions.sort((a, b) => a.created_at > b.created_at ? -1 : a.created_at < b.created_at ? 1 : 0)
  return productions
}

export const fetchRuns = async (production_id = null) => {
  if(!production_id) {
    const { data: runs } = await supabase.from('run').select('*')
    return runs
  } else {
    const { data: runs } = await supabase.from('run').select('*').eq('production', production_id)
    await runs.sort((a, b) => a.created_at > b.created_at ? -1 : a.created_at < b.created_at ? 1 : 0)
    return runs
  }
}
