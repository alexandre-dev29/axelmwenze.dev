import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check your .env file for SUPABASE_URL and SUPABASE_KEY.'
  );
}

// Create a singleton instance of the Supabase client
class SupabaseClient {
  private static instance: ReturnType<typeof createClient> | null = null;

  private constructor() {
  }

  public static getInstance() {
    if (!SupabaseClient.instance) {
      SupabaseClient.instance = createClient(supabaseUrl!, supabaseKey!);
    }
    return SupabaseClient.instance;
  }
}

// Export the singleton instance
export const supabase = SupabaseClient.getInstance();

// Export the class for testing purposes if needed
export { SupabaseClient };
