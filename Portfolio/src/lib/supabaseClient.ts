import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_Url
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

let supabaseClient: ReturnType<typeof createClient> | undefined

export const getSupabaseClient = () => {
    if (!supabaseUrl || !supabaseKey) {
        throw new Error(
            "Supabase configuration is missing. Set VITE_SUPABASE_Url and VITE_SUPABASE_PUBLISHABLE_KEY."
        )
    }

    if (!supabaseClient) {
        supabaseClient = createClient(supabaseUrl, supabaseKey)
    }

    return supabaseClient
}