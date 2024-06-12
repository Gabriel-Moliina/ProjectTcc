import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../../../services/ArticleService';
import { ArticleGridViewModel } from '../../../../models/Article';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../services/NotificationService';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ArticleService]
})
export class ProjectListComponent {
  @ViewChild('deleteModal') deleteModal!: TemplateRef<any>;
  projects: ArticleGridViewModel[] = [];
  selectedProjectId!: number;
  private modalRef!: NgbModalRef;
  initialized: boolean = false;

  constructor(private articleService: ArticleService,
    private router: Router,
    private modalService: NgbModal,
    private notificationService: NotificationService) {
    this.articleService.getAll().subscribe(response => {
      this.projects = response;
    }, error=>{

    }, () => {
      this.initialized = true;
    });

  }

  goToDetail(id: number): void {
    this.router.navigate([`/tcc/projectDetail/${id}`]);
  }

  deleteProject(projectId: number): void {
    this.articleService.delete(projectId).subscribe(reseponse => {
      this.projects = this.projects.filter(project => project.id !== projectId);
      this.notificationService.showAlert('success', 'Projeto excluído!')
    }, error => {
      this.notificationService.showAlert('warning', error.error)
    });
  }

  openDeleteModal(event: Event, projectId: number): void {
    event.stopPropagation();
    this.selectedProjectId = projectId;
    this.modalRef = this.modalService.open(this.deleteModal, { ariaLabelledBy: 'deleteModalLabel' });
  }

  confirmDelete(): void {
    this.deleteProject(this.selectedProjectId);
    this.modalRef.close();
  }

  faTrash = faTrash;
}
