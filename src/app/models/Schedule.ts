export class Schedule{
    public ArticleId:Number
    public Date:Date
    public Description:string
    constructor(articleId:Number, date: Date, description:string){
        this.ArticleId = articleId;
        this.Date= date;
        this.Description = description;
    }
}