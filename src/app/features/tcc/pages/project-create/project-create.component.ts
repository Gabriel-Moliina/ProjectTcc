import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgControlStatus } from '@angular/forms';
import { NgxDropzoneChangeEvent, NgxDropzoneModule } from 'ngx-dropzone';
import { ButtonComponent } from '../../../../core/components/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { Article } from '../../../../models/Article';
import { ArticleService } from '../../../../services/ArticleService';
import { NotificationService } from '../../../../services/NotificationService';
import { AdvisorGridViewModel } from '../../../../models/Advisor';
import { AdvisorService } from '../../../../services/AdvisorService';

@Component({
  selector: 'app-project-create',
  standalone: true,
  imports: [CommonModule, NgxDropzoneModule, FormsModule, ButtonComponent, RouterLink],
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.css',
  providers: [ArticleService]
})
export class ProjectCreateComponent {
  constructor(private articleService: ArticleService,
    private notificationService: NotificationService, 
    private router: Router,
    private advisorService: AdvisorService){
      this.loadAdvisors();
  }

  formData: FormData = new FormData();
  files: File[] = [];

  options: AdvisorGridViewModel[] = []

  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSelect(event: NgxDropzoneChangeEvent) {
    this.formData = new FormData();
    this.files = event.addedFiles;
    this.formData.append('Form', <File>this.files[0]);
  }

  etapaAtual = 1;

  nextStage() {
    this.etapaAtual++;
  }

  loadAdvisors(){
    this.advisorService.getAll().subscribe({
      next: (response) => {this.options = response}
    })
  }

  createProject() {
    let article = new Article('', '', 0, 0);
    article.Title = (<HTMLInputElement>document.getElementById('Title')).value;
    article.Description = (<HTMLTextAreaElement>document.getElementById('Description')).value;
    article.AdvisorId = Number((<HTMLSelectElement>document.getElementById('Advisor')).value);
    article.CoAdvisorId = Number((<HTMLSelectElement>document.getElementById('CoAdvisor')).value);
    
    this.articleService.create(article).subscribe({
      next: response => {
          let documentTcc = new FormData();
          documentTcc.append('Id', response.toString())
          documentTcc.append('FormFile', this.files[0])
          this.articleService.linkDocument(documentTcc).subscribe({
            next: response =>{
              this.router.navigate(['/tcc/project'])
            }
          })
          
      },
      error: error => {
        this.notificationService.showAlert('warning', error.error)
      }
  })
  }

}
