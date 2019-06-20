import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user/user.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { TeacherComponent} from './teacher/teacher/teacher.component';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';
import { TeacherDetailComponent } from './teacher/teacher-detail/teacher-detail.component';
import { TeacherUpdateComponent } from './teacher/teacher-update/teacher-update.component';


const routes: Routes = [
  // USUÁRIO

  {
    path: 'usuario',
    component: UserComponent,
    data: { title: 'Lista de usuários' }
  },
  {
    path: 'usuario/:id',
    component: UserDetailComponent,
    data: { title: 'Detalhe do usuário' }
  },
  {
    path: 'usuario-cadastro',
    component: UserAddComponent,
    data: { title: 'Adicionar usuário' }
  },
  {
    path: 'usuario-editar/:id',
    component: UserUpdateComponent,
    data: { title: 'Editar o usuário' }
  },
  {
    path: 'usuario-delete/:id',
    component: UserUpdateComponent,
    data: { title: 'Deletar o usuário' }
  },
  { path: '',
    redirectTo: '/usuario',
    pathMatch: 'full'
  },

  // TEACHER

  {
    path: 'professor',
    component: TeacherComponent,
    data: { title: 'Lista de professores' }
  },
  {
    path: 'professor/:id',
    component: TeacherDetailComponent,
    data: { title: 'Detalhe do professor' }
  },
  {
    path: 'professor-cadastro',
    component: TeacherAddComponent,
    data: { title: 'Adicionar professor' }
  },
  {
    path: 'professor-editar/:id',
    component: TeacherUpdateComponent,
    data: { title: 'Editar o professor' }
  },
  {
    path: 'professor-delete/:id',
    component: TeacherUpdateComponent,
    data: { title: 'Deletar o professor' }
  },
  { path: '',
    redirectTo: '/professor',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
