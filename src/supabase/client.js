// src/supabase/client.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ulqnvrjsjxlyutqzhlza.supabase.co'       // 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVscW52cmpzanhseXV0cXpobHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MTM0OTYsImV4cCI6MjA2NDA4OTQ5Nn0.urJMTa4aTJrpS7dycmfYym8NE-LcTendBRvOnYCdcCg'                          

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
