export class Article{
    public Title : string;
    public Description :string;
    public AdvisorId : number;
    public CoAdvisorId! :number;

    constructor(title:string, description:string, advisor:number, coAdvisor:number){
        this.Title = title;
        this.Description = description
        this.AdvisorId = advisor;
        this.CoAdvisorId = coAdvisor;
    }

    
}


export class ArticleDTO{
    public Id! : Number;
    public Title : string;
    public Description :string;
    public AdvisorId : number;
    public CoAdvisorId! :number;

    constructor(title:string, description:string, advisor:number, coAdvisor:number, projectData:FormData){
        this.Title = title;
        this.Description = description
        this.AdvisorId = advisor;
        this.CoAdvisorId = coAdvisor;
    }

    
}