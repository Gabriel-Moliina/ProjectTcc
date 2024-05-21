import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgControlStatus } from '@angular/forms';
import { NgxDropzoneChangeEvent, NgxDropzoneModule } from 'ngx-dropzone';
import { ButtonComponent } from '../../../../core/components/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { Article } from '../../../../models/Article';
import { ArticleService } from '../../../../services/ArticleService';
import { NotificationService } from '../../../../services/NotificationService';

@Component({
  selector: 'app-project-create',
  standalone: true,
  imports: [CommonModule, NgxDropzoneModule, FormsModule, ButtonComponent, RouterLink],
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.css',
  providers: [ArticleService]
})
export class ProjectCreateComponent {
  constructor(private articleService: ArticleService, private notificationService: NotificationService, private router: Router){

  }

  formData: FormData = new FormData();
  files: File[] = [];

  options = [
    { id: 0, text: 'Larissa do ADS', course: 'ADS' },
    { id: 1, text: 'Larissa do meca', course: 'Mecatrônica' },
    { id: 2, text: 'Larissa da gestão', course: 'Gestão' },
    { id: 2, text: 'Larissa da gestão', course: 'Gestão' },
    { id: 2, text: 'Larissa da gestão', course: 'Gestão' },
    { id: 2, text: 'Larissa da gestão', course: 'Gestão' },
    { id: 2, text: 'Larissa da gestão', course: 'Gestão' },
    { id: 2, text: 'Larissa da gestão', course: 'Gestão' },
    { id: 2, text: 'Larissa da gestão', course: 'Gestão' },
    { id: 2, text: 'Larissa da gestão', course: 'Gestão' },
    { id: 2, text: 'Larissa da gestão', course: 'Gestão' },
    { id: 2, text: 'Larissa da gestão', course: 'Gestão' },
    { id: 2, text: 'Larissa da gestão', course: 'Gestão' },
    { id: 2, text: 'Larissa da gestão', course: 'Gestão' },
    { id: 2, text: 'Larissa da gestão', course: 'Gestão' },
    { id: 2, text: 'Larissa da gestão', course: 'Gestão' },
    { id: 2, text: 'Larissa da gestão', course: 'Gestão' },
    { id: 2, text: 'Larissa da gestão', course: 'Gestão' }
  ]

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
