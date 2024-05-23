
export class Advisor{
    public Name!: string;
    public CurriculumLink!:string;
    public CourseId!: number;

    constructor(name:string, curriculumLink:string, courseId:number){
        this.Name = name;
        this.CurriculumLink = curriculumLink;
        this.CourseId = courseId;
    }
}

export class AdvisorGridViewModel{
    public id:number;
    public name:string;
    public curriculumLink!:string;
    public courseName!: string
    /**
     *
     */
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}