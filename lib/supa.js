import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hierxtzpsteakecmwnek.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpZXJ4dHpwc3RlYWtlY213bmVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5Nzc5NjgsImV4cCI6MjA0MTU1Mzk2OH0.-UkX-GdfLsFmYRdPu18Mwh8M-tK3OZ9tKNfw4qd-tTo';

export const supabase = createClient(supabaseUrl, supaAnonKey);