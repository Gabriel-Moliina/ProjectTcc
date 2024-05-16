import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TccComponent } from './tcc.component';
import { ProjectComponent } from './pages/project/project.component';
import { StudentComponent } from './pages/student/student.component';
import { ProjectCreateComponent } from './pages/project/project-create/project-create.component';
import { ProjectDetailComponent } from './pages/project/project-detail/project-detail.component';
import { ProjectListComponent } from './pages/project/project-list/project-list.component';
import { AuthGuard } from '../../services/AuthGuard';

const routes: Routes = [{
  path: '',
  component: TccComponent,
  children: [
    { path: '', redirectTo: 'project', pathMatch: 'full'},
    { path: 'project', component: ProjectComponent, canActivate: [AuthGuard] },
    { path: 'projects', component: ProjectListComponent },
    { path: 'project-detail/:id', component: ProjectDetailComponent },
    { path: 'project/create', component: ProjectCreateComponent },
    { path: 'student', component: StudentComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TccRoutingModule { }
