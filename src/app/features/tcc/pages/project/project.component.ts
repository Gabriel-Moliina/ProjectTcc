import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink, MatGridListModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

}
