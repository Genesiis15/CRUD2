import { supabase } from './supabase'

//GET ALL TABLE
export async function getQuery(query) {
    const { data } = await supabase.from(query).select();
    return data
}