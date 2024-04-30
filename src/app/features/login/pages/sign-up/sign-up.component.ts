import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputComponent } from '../../../../core/components/input/input.component';
import { ButtonComponent } from '../../../../core/components/button/button.component';

@Component({
    selector: 'app-sign-up',
    standalone: true,
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.css',
    imports: [RouterLink, ButtonComponent, InputComponent]
})
export class SignUpComponent {

}
