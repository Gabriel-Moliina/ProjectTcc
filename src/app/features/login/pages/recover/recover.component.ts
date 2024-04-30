import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputComponent } from '../../../../core/components/input/input.component';
import { ButtonComponent } from '../../../../core/components/button/button.component';

@Component({
    selector: 'app-recover',
    standalone: true,
    templateUrl: './recover.component.html',
    styleUrl: './recover.component.css',
    imports: [RouterLink, ButtonComponent, InputComponent]
})
export class RecoverComponent {

}
