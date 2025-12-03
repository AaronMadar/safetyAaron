/**
 * Type pour les données du formulaire de rapport d'incident
 * 
 * COMMENT IDENTIFIER LES TYPES :
 * 1. Regarde la structure dans dataform-context.tsx (lignes 28-40)
 * 2. Regarde comment chaque champ est utilisé dans les composants
 * 3. Détermine si c'est string, number, boolean, array, etc.
 */
export interface SafetyIncident {
  activity: string;
  damage: string;
  date: string;
  description: string;
  kindOfIncident: string;
  place: string[]; // Array car c'est des checkboxes multiples
  severityIncident: string;
  severityInjurie: string;
  unitActivity: string;
  unity: string;
  weather: string;
}

/**
 * Type pour les incidents stockés dans la base de données
 * 
 * COMMENT CRÉER UN TYPE ÉTENDU :
 * On utilise "extends" pour ajouter des propriétés supplémentaires
 * ou on crée un nouveau type avec "&" (intersection)
 */
export interface SafetyIncidentWithId extends SafetyIncident {
  id: number; // Ajouté automatiquement lors de l'ajout
  // Note: date est écrasée dans db-context, mais on garde le même type string
}

