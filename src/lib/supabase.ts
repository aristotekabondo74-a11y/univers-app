
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';

/**
 * CONFIGURATION RÉUSSIE :
 * Vos clés ont été injectées avec succès.
 */

const supabaseUrl = 'https://sssudqvnutoxibixpmbp.supabase.co';
const supabaseAnonKey = 'sb_publishable_3JaDCGhd6JVjHiMC8fixYQ_p6Q9Fsdo';

// Validation de l'URL pour assurer la stabilité du système
const isValidUrl = (url: string) => {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && !url.includes('votre-projet');
  } catch (e) {
    return false;
  }
};

const finalUrl = isValidUrl(supabaseUrl) ? supabaseUrl : 'https://placeholder.supabase.co';
const finalKey = supabaseAnonKey.includes('votre-cle') ? 'placeholder-key' : supabaseAnonKey;

export const supabase = createClient(finalUrl, finalKey);

console.log("🚀 Synchronisation Univers : Connexion au node neural sssudqvnutoxibixpmbp...");
