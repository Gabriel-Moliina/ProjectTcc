import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneChangeEvent, NgxDropzoneModule } from 'ngx-dropzone';

@Component({
  selector: 'app-project-create',
  standalone: true,
  imports: [CommonModule, NgxDropzoneModule, FormsModule],
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.css'
})
export class ProjectCreateComponent {
options = [
  { id: 0, text: 'Larissa do ADS', course: 'ADS'},
  { id: 1, text: 'Larissa do meca', course: 'Mecatrônica'},
  { id: 2, text: 'Larissa da gestão', course: 'Gestão'},
  { id: 2, text: 'Larissa da gestão', course: 'Gestão'},
  { id: 2, text: 'Larissa da gestão', course: 'Gestão'},
  { id: 2, text: 'Larissa da gestão', course: 'Gestão'},
  { id: 2, text: 'Larissa da gestão', course: 'Gestão'},
  { id: 2, text: 'Larissa da gestão', course: 'Gestão'},
  { id: 2, text: 'Larissa da gestão', course: 'Gestão'},
  { id: 2, text: 'Larissa da gestão', course: 'Gestão'},
  { id: 2, text: 'Larissa da gestão', course: 'Gestão'},
  { id: 2, text: 'Larissa da gestão', course: 'Gestão'},
  { id: 2, text: 'Larissa da gestão', course: 'Gestão'},
  { id: 2, text: 'Larissa da gestão', course: 'Gestão'},
  { id: 2, text: 'Larissa da gestão', course: 'Gestão'},
  { id: 2, text: 'Larissa da gestão', course: 'Gestão'},
  { id: 2, text: 'Larissa da gestão', course: 'Gestão'},
  { id: 2, text: 'Larissa da gestão', course: 'Gestão'}
]

  
onFileDrop($event: NgxDropzoneChangeEvent) {
  console.log($event);
}

}
