import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MenuComponent } from "./shared/menu/menu.component";
import { ProjectComponent } from "./pages/project/project.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-tcc',
    standalone: true,
    templateUrl: './tcc.component.html',
    styleUrl: './tcc.component.css',
    imports: [MatSidenavModule, MenuComponent, ProjectComponent, RouterOutlet]
})
export class TccComponent {

}
