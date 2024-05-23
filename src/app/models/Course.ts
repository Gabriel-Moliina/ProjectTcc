export class Course{
    public Id:number;
    public Description:string;

    constructor(id:number, description:string){
        this.Id = id;
        this.Description = description;
    }
}

export class CourseGridViewModel{
    public id:number;
    public name:string;

    constructor(id:number, description:string){
        this.id = id;
        this.name = description;
    }
}