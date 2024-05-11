import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneChangeEvent, NgxDropzoneModule } from 'ngx-dropzone';
import { ButtonComponent } from '../../../../../core/components/button/button.component';
import { RouterLink } from '@angular/router';
import { Project } from '../../../../../models/Project';
import { Advisor } from '../../../../../models/Advisor';

@Component({
  selector: 'app-project-create',
  standalone: true,
  imports: [CommonModule, NgxDropzoneModule, FormsModule, ButtonComponent, RouterLink],
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.css'
})
export class ProjectCreateComponent implements OnInit{
  files: File[] = [];
  etapaAtual: number = 1;
  project: Project = new Project('', '', 0, 0, new FormData());
  options: { id: number, text: string }[] = [
    {id: 0, text: 'teste'},
    {id: 1, text: 'teste2'},
    {id: 2, text: 'teste3'},
    {id: 3, text: 'teste4'},
    {id: 4, text: 'teste5'},
    {id: 5, text: 'teste6'},
    {id: 6, text: 'teste7'},
    {id: 7, text: 'teste8'},
    {id: 8, text: 'teste9'},
  ];

  ngOnInit(){

  }

  constructor() {}

  proximaEtapa() {
    this.etapaAtual++;
  }

  onSelect(event:any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0]; // Pegar apenas o primeiro arquivo
      const formData = new FormData();
      formData.append('file', file, file.name); // Adicionar o arquivo ao FormData
      this.project.ProjectData = formData; // Adicionar o FormData ao objeto Project
      this.files.push(file); // Adicionar o arquivo à lista de arquivos
    }
  }

  onRemove(file: File) {
    // Lógica para remover o arquivo da lista de arquivos
    const index = this.files.indexOf(file);
    if (index > -1) {
      this.files.splice(index, 1);
    }
  }

  criarProjeto() {
    this.project.Title = (<HTMLInputElement>document.getElementById('Title')).value;
    this.project.Description = (<HTMLTextAreaElement>document.getElementById('Description')).value;
    this.project.AdvisorId = Number((<HTMLSelectElement>document.getElementById('Advisor')).value);
    this.project.CoAdvisorId = Number((<HTMLSelectElement>document.getElementById('CoAdvisor')).value); 

    console.log(this.project);
  }

}
