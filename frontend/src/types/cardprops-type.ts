type CardProps = {
  activity: string;
  id: number;
  damage: string;
  date: string;
  description: string;
  kindOfIncident: string;
  place: string;
  severityIncident: string;
  severityInjurie: string;
  unitActivity: string;
  unity: string;
  weather: string;
  onDelete: React.Dispatch<React.SetStateAction<any>>;
};


export type { CardProps };