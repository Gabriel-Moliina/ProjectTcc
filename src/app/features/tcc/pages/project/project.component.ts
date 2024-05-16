import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../core/components/button/button.component';
import { NgxDropzoneChangeEvent, NgxDropzoneModule } from 'ngx-dropzone';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterLink, MatGridListModule, ButtonComponent, NgxDropzoneModule, FontAwesomeModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})

export class ProjectComponent {
  constructor(private router: Router) {
        
  }
  formData: FormData = new FormData();
  files: File[] = [];

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
  hasProject:boolean = false

  faRefresh = faRefresh
}
