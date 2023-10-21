import { supabase } from './supabase'

//GET ALL TABLE
export async function getQuery(query) {
    const { data } = await supabase.from(query).select();
    return data
}

//GET PRODUCT
export async function getProduct(table, id) {
    const { data } = await supabase.from(table).select('*')
        .eq('id', id)
        .single();
    return data
}