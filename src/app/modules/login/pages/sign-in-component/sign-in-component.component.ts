import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { InputComponent } from '../../../../view/input/input.component';
import { ButtonComponent } from '../../../../view/button/button.component';

@Component({
    selector: 'app-sign-in-component',
    standalone: true,
    templateUrl: './sign-in-component.component.html',
    styleUrl: './sign-in-component.component.css',
    imports: [RouterLink, InputComponent, ButtonComponent]
})
export class SignInComponent {
    constructor(private router: Router) {}
    
    public Login() {
        this.router.navigate(['/cards']);
    }
}