import { Course } from "./Course";

export class Advisor{
    public Id: number;
    public Name!: string;
    public Course!: Course;

    constructor(id:number, name:string, course:Course){
        this.Id = id,
        this.Name = name,
        this.Course = course
    }
}