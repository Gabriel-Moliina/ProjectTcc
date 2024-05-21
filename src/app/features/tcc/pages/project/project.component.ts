import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../core/components/button/button.component';
import { NgxDropzoneChangeEvent, NgxDropzoneModule } from 'ngx-dropzone';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { ArticleService } from '../../../../services/ArticleService';
import { ArticleDeliveryDateViewModel, ArticleScheduleViewModel } from '../../../../models/Article';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterLink, MatGridListModule, ButtonComponent, NgxDropzoneModule, FontAwesomeModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ArticleService]
})
export class ProjectComponent {
  formData: FormData = new FormData();
  files: File[] = [];
  hasProject: boolean = false;
  faRefresh = faRefresh;
  project!: ArticleDeliveryDateViewModel
  initialized: boolean = false;

  constructor(private router: Router, private articleService: ArticleService) {
    this.loadProjectData();
  }


  loadProjectData(): void {
    this.articleService.getByAuthorId().subscribe(response => {
      this.hasProject = !!response;
      if (this.hasProject) {
        this.project = response;
      }
    },
      error => {

      }, () =>{
          this.initialized = true;
      });
  }

  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSelect(event: NgxDropzoneChangeEvent) {
    this.formData = new FormData();
    this.files = event.addedFiles;
    this.formData.append('file', this.files[0]);
  }

  routeProjectCreate() {
    this.router.navigate(['/tcc/project/create']);
  }
}
