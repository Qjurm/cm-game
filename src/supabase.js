import { createClient } from '@supabase/supabase-js'

// These variables will come from your GitLab CI/CD settings later
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)