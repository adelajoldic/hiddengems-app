import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    const supabaseUrl = 'https://enwjxnenooagbvcantzt.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVud2p4bmVub29hZ2J2Y2FudHp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNjI1MjMsImV4cCI6MjA0NzkzODUyM30.Kqxg3PK7I6cM6VxeG13XCn1Qk6GaWt9asJq0BqfGNH8';
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async getLocationsByCity(city: string) {
    const { data, error } = await this.supabase
      .from('locations')
      .select('*')
      .ilike('city_name', `%${city}%`);
    return { data, error };
  }
}
