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
  userName: string = '';
  userRA: string = '';
  userEmail: string = '';

  constructor(private userService: UserService) {
    this.getLoggedUser();
  }

  getLoggedUser(){
    this.userService.getLoggedUser().subscribe({
      next: (response) =>{ 
        this.userEmail = response.email;
        this.userName = response.name;
        this.userRA = response.ra;
       }
    })
  }

  logOut(){
    this.userService.logOut();
  }
  faSignOut = faSignOut
}
