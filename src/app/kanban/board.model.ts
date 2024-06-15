import { Observable } from "rxjs";

export interface Board {
    id?: string;
    title?: string;
    priority?: number;
    tasks?: Observable<Task[]>;
}
export interface Task {
    description?: string;
    label?: 'purple' | 'blue' | 'green' | 'yellow' | 'red' | 'grey';
}