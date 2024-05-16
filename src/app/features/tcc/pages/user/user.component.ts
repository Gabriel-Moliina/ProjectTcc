import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../../../services/UserService';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [UserService]
})
export class UserComponent {
  constructor(private userService: UserService) {
    
  }

  logOut(){
    this.userService.logOut();
  }
  faSignOut = faSignOut
}
