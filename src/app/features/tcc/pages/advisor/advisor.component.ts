import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from '../../../../services/NotificationService';
import { AdvisorService } from '../../../../services/AdvisorService';
import { Advisor, AdvisorGridViewModel } from '../../../../models/Advisor';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/AuthService';
import { CourseGridViewModel } from '../../../../models/Course';
import { CourseService } from '../../../../services/CourseService';


@Component({
  selector: 'app-advisor',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './advisor.component.html',
  styleUrl: './advisor.component.css',
  providers: [AdvisorService, AuthService, CourseService]
})
export class AdvisorComponent {
  @ViewChild('deleteModal') deleteModal!: TemplateRef<any>;
  advisors: AdvisorGridViewModel[] = [];
  courses: CourseGridViewModel[] = [];

  selectedAdvisorId!: number;
  private modalRef!: NgbModalRef;
  initialized: boolean = false;

  constructor(private advisorService: AdvisorService,
    public authService: AuthService,
    private router: Router,
    private modalService: NgbModal,
    private notificationService: NotificationService,
    private courseService: CourseService) {
    this.loadAdvisors();
    this.loadCoursesSelectBox();
  }

  deleteAdvisor(advisorId: number): void {
    this.advisorService.delete(advisorId).subscribe({
      next: () => {
        this.advisors = this.advisors.filter(advisor => advisor.id !== advisorId);
        this.notificationService.showAlert('success', 'Orientador excluído!')
      },
      error: (error) => {
        this.notificationService.showAlert('warning', error.error)
      }
    });
  }

  loadAdvisors() {
    this.advisorService.getAll().subscribe({
      next: (response) => { this.advisors = response; }
    });
  }

  loadCoursesSelectBox(){
    this.courseService.getAll().subscribe({
      next: (reseponse) =>{ this.courses = reseponse }
    });
  }

  openDeleteModal(event: Event, projectId: number): void {
    event.stopPropagation();
    this.selectedAdvisorId = projectId;
    this.modalRef = this.modalService.open(this.deleteModal, { ariaLabelledBy: 'deleteModalLabel' });
  }

  confirmDelete(): void {
    this.deleteAdvisor(this.selectedAdvisorId);
    this.modalRef.close();
  }

  createAdvisor(): void{
    debugger;
    let name = (<HTMLInputElement>document.getElementById('Name')).value;
    let courseId = Number((<HTMLSelectElement>document.getElementById('Course')).value);
    let curriculumLink = (<HTMLInputElement>document.getElementById('LinkCurriculum')).value;
    let advisor = new Advisor(name, curriculumLink, courseId);

    this.advisorService.create(advisor).subscribe({
      next: ()=>{
        this.notificationService.showAlert('success', 'Orientador criado com sucesso!');
        this.loadAdvisors();
      },
      error: (error) => {this.notificationService.showAlert('warning', error.error)}
    });
  }

  faTrash = faTrash
}
