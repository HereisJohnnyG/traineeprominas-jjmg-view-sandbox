import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UserComponent } from './user/user/user.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { TeacherComponent } from './teacher/teacher/teacher.component';
import { TeacherDetailComponent } from './teacher/teacher-detail/teacher-detail.component';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';
import { TeacherUpdateComponent } from './teacher/teacher-update/teacher-update.component';
import { CourseComponent } from './course/course/course.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseAddComponent } from './course/course-add/course-add.component';
import { CourseUpdateComponent } from './course/course-update/course-update.component';
import { StudentComponent } from './student/student/student.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';
import { ChartComponent } from './chart/chart.component';
import { CallbackComponent } from './callback/callback.component';

export const routes: Routes = [
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'usuario',
        component: UserComponent,
        data: {
          title: 'Lista de usuários'
        }
      },
      {
        path: 'grafico',
        component: ChartComponent,
        data: {
          title: 'Graficos'
        }
      },
      {
        path: 'usuario/:id',
        component: UserDetailComponent,
        data: { title: 'Detalhe do usuário' }
      },
      {
        path: 'cadastro/usuario',
        component: UserAddComponent,
        data: { title: 'Adicionar usuário' }
      },
      {
        path: 'editar/usuario/:id',
        component: UserUpdateComponent,
        data: { title: 'Editar o usuário' }
      },
      {
        path: 'usuario-delete/:id',
        component: UserUpdateComponent,
        data: { title: 'Deletar o usuário' }
      },
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
        path: 'cadastro/professor',
        component: TeacherAddComponent,
        data: { title: 'Adicionar professor' }
      },
      {
        path: 'editar/professor/:id',
        component: TeacherUpdateComponent,
        data: { title: 'Editar o professor' }
      },
      {
        path: 'professor-delete/:id',
        component: TeacherUpdateComponent,
        data: { title: 'Deletar o professor' }
      },
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
        path: 'cadastro/curso',
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
      // Student

      {
        path: 'estudante',
        component: StudentComponent,
        data: { title: 'Lista de estudantes' }
      },
      {
        path: 'estudante/:id',
        component: StudentDetailComponent,
        data: { title: 'Detalhe do estudantes' }
      },
      {
        path: 'cadastro/estudante',
        component: StudentAddComponent,
        data: { title: 'Adicionar estudantes' }
      },
      {
        path: 'editar/estudante/:id',
        component: StudentUpdateComponent,
        data: { title: 'Editar o estudantes' }
      },
      {
        path: 'estudante-delete/:id',
        component: StudentUpdateComponent,
        data: { title: 'Deletar o estudantes' }
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: false }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
