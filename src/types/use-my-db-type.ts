export type useMyDbType =  {
    dbLocal: any;
    add: (newEvent: any) => void;
    deleteOne: (id: any) => void;
    deleteAll: () => void;
}