import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputComponent } from '../../../../core/components/input/input.component';
import { ButtonComponent } from '../../../../core/components/button/button.component';
import { UserService } from '../../../../services/UserService';
import { User } from '../../../../models/User';
import { NotificationService } from '../../../../services/NotificationService';

@Component({
    selector: 'app-sign-up',
    standalone: true,
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.css',
    imports: [RouterLink, ButtonComponent, InputComponent],
    providers: [UserService]
})
export class SignUpComponent {
    constructor(private userService: UserService, private notificationService: NotificationService) { }
    createUser(): void {
        const name = (<HTMLInputElement>document.getElementById('Name')).value;
        const email = (<HTMLInputElement>document.getElementById('Email')).value;
        const password = (<HTMLInputElement>document.getElementById('Password')).value;
        const ra = (<HTMLInputElement>document.getElementById('RA')).value;

        let newUser = new User(name, email, '', password, ra);
        this.userService.createUser(newUser)
            .subscribe({
                next: response => {
                    this.notificationService.showAlert('success', 'Cadastro realizado com sucesso');
                },
                error: error => {
                    this.notificationService.showAlert('warning', error.message);
                    console.error(error)
                }
            });
    }
}
