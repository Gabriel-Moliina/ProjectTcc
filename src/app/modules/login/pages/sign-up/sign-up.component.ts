import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from "../../../../view/button/button.component";
import { InputComponent } from "../../../../view/input/input.component";

@Component({
    selector: 'app-sign-up',
    standalone: true,
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.css',
    imports: [RouterLink, ButtonComponent, InputComponent]
})
export class SignUpComponent {

}
