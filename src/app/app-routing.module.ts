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
import { CourseComponent } from './course/course/course.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseAddComponent } from './course/course-add/course-add.component';
import { CourseUpdateComponent } from './course/course-update/course-update.component';
import { StudentComponent } from './student/student/student.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';


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
  },

  // COURSE

  {
    path: 'curso',
    component: CourseComponent,
    data: { title: 'Lista de cursos' }
  },
  {
    path: 'curso/:id',
    component: CourseDetailComponent,
    data: { title: 'Detalhe do curso' }
  },
  {
    path: 'curso-cadastro',
    component: CourseAddComponent,
    data: { title: 'Adicionar curso' }
  },
  {
    path: 'curso-editar/:id',
    component: CourseUpdateComponent,
    data: { title: 'Editar o curso' }
  },
  {
    path: 'curso-delete/:id',
    component: CourseUpdateComponent,
    data: { title: 'Deletar o curso' }
  },
  { path: '',
    redirectTo: '/curso',
    pathMatch: 'full'
  },

  // Student

  {
    path: 'estudante',
    component: StudentComponent,
    data: { title: 'Lista de cursos' }
  },
  {
    path: 'estudante/:id',
    component: StudentDetailComponent,
    data: { title: 'Detalhe do curso' }
  },
  {
    path: 'estudante-cadastro',
    component: StudentAddComponent,
    data: { title: 'Adicionar curso' }
  },
  {
    path: 'estudante-editar/:id',
    component: StudentUpdateComponent,
    data: { title: 'Editar o curso' }
  },
  {
    path: 'estudante-delete/:id',
    component: StudentUpdateComponent,
    data: { title: 'Deletar o curso' }
  },
  { path: '',
    redirectTo: '/curso',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
