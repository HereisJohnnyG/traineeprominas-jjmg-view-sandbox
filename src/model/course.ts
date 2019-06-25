import { Teacher } from './teacher';

export class Course {
    id: number;
    name: string;
    teacher: Teacher[] = [];
    city: string;
    period: number;
}
