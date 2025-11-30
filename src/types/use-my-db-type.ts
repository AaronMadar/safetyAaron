import type { SafetyIncident, SafetyIncidentWithId } from "./safety-incident-type";

/**
 * COMMENT TYPER LE CONTEXTE DB :
 * 
 * 1. dbLocal : array de SafetyIncidentWithId (car ils ont un id)
 * 2. add : prend SafetyIncident (sans id, car l'id est ajouté dans la fonction)
 * 3. deleteOne : prend number (l'id à supprimer)
 * 4. deleteAll : ne prend rien, retourne void
 */
export type useMyDbType = {
    dbLocal: SafetyIncidentWithId[];
    add: (newEvent: SafetyIncident) => void;
    deleteOne: (id: number) => void;
    deleteAll: () => void;
}