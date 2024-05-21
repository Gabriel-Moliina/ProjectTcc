import { Component, Injectable, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../core/components/button/button.component';
import { InputComponent } from '../../../../core/components/input/input.component';
import { UserService } from '../../../../services/UserService';
import { UserLogin } from '../../../../models/User';
import { NotificationService } from '../../../../services/NotificationService';

@Component({
    selector: 'app-sign-in-component',
    standalone: true,
    templateUrl: './sign-in-component.component.html',
    styleUrl: './sign-in-component.component.css',
    imports: [RouterLink, InputComponent, ButtonComponent],
    providers: [UserService]
})
export class SignInComponent {
    constructor(private router: Router, 
        private userService: UserService, 
        private notificationService: NotificationService
    ) {

    }


    Login() {
        const email = (<HTMLInputElement>document.getElementById('Email')).value;
        const password = (<HTMLInputElement>document.getElementById('Password')).value;

        let newUser = new UserLogin(email, password);
        this.userService.login(newUser)
            .subscribe({
                next: response => {
                    const expirationDate = new Date();
                    expirationDate.setDate(expirationDate.getDate() + 1);
                    localStorage.setItem('tokenUser', response.token)
                    localStorage.setItem('Admin', Number(response.tokenInfos.admin).toString())
                    this.router.navigate(['/tcc']);
                },
                error: error => {
                    this.notificationService.showAlert('warning', error.error);
                    console.error(error)
                }
            });
    }
}