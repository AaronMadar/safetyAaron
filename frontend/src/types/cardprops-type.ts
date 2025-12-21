type CardProps = {
  activity: string;
  id: number;
  damage: string;
  date: string;
  description: string;
  kindOfIncident: string;
  place: string | string[];
  severityIncident: string;
  severityInjurie: string;
  unitActivity: string;
  unity: string;
  weather: string;
  onDelete: React.Dispatch<React.SetStateAction<any>>;
  onUpdate?: React.Dispatch<React.SetStateAction<any>>; 
};


export type { CardProps };