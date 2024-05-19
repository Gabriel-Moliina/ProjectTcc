import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../../../../services/ArticleService';
import { ArticleGridViewModel } from '../../../../../models/Article';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ArticleService]
})
export class ProjectListComponent implements OnInit {
  projects: ArticleGridViewModel[] = [];

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
    this.articleService.getAll().subscribe(response => {
      this.projects = response;
    })
  }

  goToDetail(id: number): void {
    this.router.navigate([`/tcc/projectDetail/${id}`]);
  }

  deleteProject(event: Event, projectId: number) {
    event.stopPropagation();
    this.articleService.delete(projectId).subscribe()
}


  faTrash = faTrash;
}
