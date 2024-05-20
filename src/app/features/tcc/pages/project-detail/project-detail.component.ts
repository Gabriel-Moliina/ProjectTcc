import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../../../services/ArticleService';
import { ArticleDeliveryDateViewModel } from '../../../../models/Article';
import { faRefresh, faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ArticleService]
})
export class ProjectDetailComponent implements OnInit {

  createDelivery() {
    const [year, month, day] = (<HTMLInputElement>document.getElementById('Date')).value.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    const description = (<HTMLInputElement>document.getElementById('Description')).value;
    console.log(date);
    console.log(description)
  }
  project: ArticleDeliveryDateViewModel | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.articleService.getById(Number(id)).subscribe(response => {
        this.project = response;
      })
    }
  }

  faRefresh = faRefresh
  faLeftLong = faLeftLong
}
