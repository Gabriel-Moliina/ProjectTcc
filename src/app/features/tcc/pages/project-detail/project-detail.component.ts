import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../../../services/ArticleService';
import { ArticleDeliveryDateViewModel } from '../../../../models/Article';
import { faRefresh, faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArticleScheduleService } from '../../../../services/ArticleScheduleService';
import { Schedule } from '../../../../models/Schedule';
import { NotificationService } from '../../../../services/NotificationService';


@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ArticleService, ArticleScheduleService]
})
export class ProjectDetailComponent {

  createDelivery() {
    const [year, month, day] = (<HTMLInputElement>document.getElementById('Date')).value.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    const description = (<HTMLInputElement>document.getElementById('Description')).value;
    
    this.articleScheduleService.create(new Schedule(this.project?.id ?? 0, date, description))
    .subscribe(response =>{
      this.notificationService.showAlert('success', 'Data de entrega cadastrada')
    },
    error =>{
      this.notificationService.showAlert('warning', error.error)
    })
  }
  project: ArticleDeliveryDateViewModel | null = null;

  constructor(private route: ActivatedRoute, 
    private articleService: ArticleService, 
    private articleScheduleService: ArticleScheduleService,
    private notificationService: NotificationService) { 

      this.loadProject();
    }

  loadProject():void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.articleService.getById(Number(id)).subscribe(response => {
        this.project = response;
      })
    }
  }

  loadData():void{
    document.getElementById('reload')?.classList.add('icon-reload-animation')
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.articleService.getById(Number(id)).subscribe({
        next: (response) => {this.project!.deliveryDates = response.deliveryDates},
        complete: () =>{ setTimeout(() => {document.getElementById('reload')?.classList.remove('icon-reload-animation')}, 500)}
      })
    }
  }

  faRefresh = faRefresh
  faLeftLong = faLeftLong
}
