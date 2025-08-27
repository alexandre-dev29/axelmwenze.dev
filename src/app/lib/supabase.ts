import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from '@/portfolio/app/lib/supabase.types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check your .env file for SUPABASE_URL and SUPABASE_KEY.'
  );
}

// Create a singleton instance of the Supabase client
class SupabaseClientCreate {
  private static instance: SupabaseClient<Database> | null = null;

  private constructor() {
  }

  public static getInstance() {
    if (!SupabaseClientCreate.instance) {
      SupabaseClientCreate.instance = createClient<Database>(supabaseUrl!, supabaseKey!);
    }
    return SupabaseClientCreate.instance;
  }
}

// Export the singleton instance
export const supabase = SupabaseClientCreate.getInstance();


