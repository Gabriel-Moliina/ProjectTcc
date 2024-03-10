import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from "../../../../view/button/button.component";
import { InputComponent } from "../../../../view/input/input.component";

@Component({
    selector: 'app-recover',
    standalone: true,
    templateUrl: './recover.component.html',
    styleUrl: './recover.component.css',
    imports: [RouterLink, ButtonComponent, InputComponent]
})
export class RecoverComponent {

}
