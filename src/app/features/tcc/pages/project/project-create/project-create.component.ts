import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneChangeEvent, NgxDropzoneModule } from 'ngx-dropzone';
import { ButtonComponent } from '../../../../../core/components/button/button.component';
import { RouterLink } from '@angular/router';
import { Project } from '../../../../../models/Project';

@Component({
  selector: 'app-project-create',
  standalone: true,
  imports: [CommonModule, NgxDropzoneModule, FormsModule, ButtonComponent, RouterLink],
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.css'
})
export class ProjectCreateComponent implements OnInit {
  formData: FormData = new FormData();
  files: File[] = [];

  ngOnInit() {

  }

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
    this.formData.append('file', this.files[0]);
  }

  etapaAtual = 1;

  nextStage() {
    this.etapaAtual++;
  }

  createProject() {
    let project = new Project('', '', 0, 0, new FormData());
    project.Title = (<HTMLInputElement>document.getElementById('Title')).value;
    project.Description = (<HTMLTextAreaElement>document.getElementById('Description')).value;
    project.AdvisorId = Number((<HTMLSelectElement>document.getElementById('Advisor')).value);
    project.CoAdvisorId = Number((<HTMLSelectElement>document.getElementById('CoAdvisor')).value);
    project.ProjectData = this.formData;

    console.log(project);
  }

}
