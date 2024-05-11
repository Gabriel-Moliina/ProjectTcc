export class Project{
    public Title : string;
    public Description :string;
    public AdvisorId : number;
    public CoAdvisorId! :number;
    public ProjectData : FormData

    constructor(title:string, description:string, advisor:number, coAdvisor:number, projectData:FormData){
        this.Title = title;
        this.Description = description
        this.AdvisorId = advisor;
        this.CoAdvisorId = coAdvisor;
        this.ProjectData = projectData;
    }

    
}