import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputComponent } from "../../../../view/input/input.component";
import { ButtonComponent } from "../../../../view/button/button.component";

@Component({
    selector: 'app-sign-in-component',
    standalone: true,
    templateUrl: './sign-in-component.component.html',
    styleUrl: './sign-in-component.component.css',
    imports: [RouterLink, InputComponent, ButtonComponent]
})
export class SignInComponent {

}
