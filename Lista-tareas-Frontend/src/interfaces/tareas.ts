export interface Tarea  {
  _id: string;
  nombreTarea: string;
  fecha: Date;
  categoria: string;
  descripcion: string;
  prioridad: string; 
}

export type tareaFormData = Omit<Tarea , 'id'>;