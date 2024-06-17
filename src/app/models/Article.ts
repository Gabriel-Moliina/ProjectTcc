export class Article{
    public Title : string;
    public Description :string;
    public AdvisorId : number;
    public CoAdvisorId? :number;
    public AdvisorCurriculumLink!:string
    public CoAdvisorCurriculumLink!:string

    constructor(title:string, description:string, advisor:number){
        this.Title = title;
        this.Description = description
        this.AdvisorId = advisor;
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

export class ArticleDeliveryDateViewModel{
    public id!: number
    public title!: string
    public author!:string
    public advisor!: string
    public coAdvisor!: string
    public description!: string
    public advisorCurriculumLink!: string
    public coAdvisorCurriculumLink!: string
    public file!: string
    public authorId!: number
    public advisorId!: number
    public coAdvisorId!: number
    public isAccepted!: boolean
    public deliveryDates!: ArticleScheduleViewModel[]
    public listArticleDocument!: ArticleDocumentViewModel[]
}

export class ArticleScheduleViewModel{
    public id!:number
    public articleId!: number
    public description!: string
    public date!: Date
}

export class ArticleDocumentViewModel{
    public fileName!: string
    public articleId!: number
    public base64File!: string
}

export class ArticleGridViewModel{
    public id!: number;
    public title! : string;
    public author!: string;
    public advisor!: string;
}