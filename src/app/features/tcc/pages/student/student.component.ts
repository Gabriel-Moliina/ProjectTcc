import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../../../services/UserService';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
  providers: [UserService]
})
export class StudentComponent {
  constructor(private userService: UserService) {
    
  }

  logOut(){
    this.userService.logOut();
  }
  faSignOut = faSignOut
}
