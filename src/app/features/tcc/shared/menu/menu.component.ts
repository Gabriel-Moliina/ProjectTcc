import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatCardModule, MatRippleModule, MatIconModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
