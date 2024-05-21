import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TccComponent } from './tcc.component';
import { ProjectComponent } from './pages/project/project.component';
import { UserComponent } from './pages/user/user.component';
import { ProjectCreateComponent } from './pages/project-create/project-create.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { AdminGuard } from '../../services/guards/AdminGuard';
import { StudentGuard } from '../../services/guards/StudentGuard';
import { DefaultGuard } from '../../services/guards/DefaultGuard';
import { AdvisorComponent } from './pages/advisor/advisor.component';

const routes: Routes = [{
  path: '',
  component: TccComponent,
  children: [
    { path: '', redirectTo: 'user', pathMatch: 'full', },
    { path: 'project', component: ProjectComponent, canActivate: [StudentGuard] },
    { path: 'advisor', component: AdvisorComponent },
    { path: 'projects', component: ProjectListComponent, canActivate: [AdminGuard] },
    { path: 'projectDetail/:id', component: ProjectDetailComponent, canActivate: [AdminGuard] },
    { path: 'project/create', component: ProjectCreateComponent, canActivate: [StudentGuard] },
    { path: 'user', component: UserComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TccRoutingModule { }
