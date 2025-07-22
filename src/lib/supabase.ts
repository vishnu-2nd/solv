import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      articles: {
        Row: {
          id: string
          title: string
          slug: string
          content: string
          cover_url: string | null
          author: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content: string
          cover_url?: string | null
          author: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string
          cover_url?: string | null
          author?: string
          created_at?: string
          updated_at?: string
        }
      }
      jobs: {
        Row: {
          id: string
          title: string
          department: string
          location: string
          type: string
          experience: string
          description: string
          requirements: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          department: string
          location: string
          type: string
          experience: string
          description: string
          requirements: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          department?: string
          location?: string
          type?: string
          experience?: string
          description?: string
          requirements?: string[]
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}