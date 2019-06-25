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

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'usuario',
    pathMatch: 'full',
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
          title: 'Register Page'
        }
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
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
