import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user/user.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';

const routes: Routes = [
  {
    path: 'usuario',
    component: UserComponent,
    data: { title: 'Lista de Produtos' }
  },
  {
    path: 'usuario/:id',
    component: UserDetailComponent,
    data: { title: 'Detalhe do Produto' }
  },
  {
    path: 'usuario-cadastro',
    component: UserAddComponent,
    data: { title: 'Adicionar Produto' }
  },
  {
    path: 'usuario-editar/:id',
    component: UserUpdateComponent,
    data: { title: 'Editar o Produto' }
  },
  {
    path: 'usuario-delete/:id',
    component: UserUpdateComponent,
    data: { title: 'Deletar o Produto' }
  },
  { path: '',
    redirectTo: '/usuario',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
