import { Advisor } from "./Advisor";

export class Project{
    public Title : string;
    public Advisor : Advisor;
    public CoAdvisor! :Advisor;
    public ProjectData : FormData

    constructor(title:string, advisor:Advisor, coAdvisor:Advisor, projectData:FormData){
        this.Title = title;
        this.Advisor = advisor;
        this.CoAdvisor = coAdvisor;
        this.ProjectData = projectData;
    }

    
}