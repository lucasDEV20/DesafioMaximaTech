import { VendedorUpdateComponent } from './components/vendedor/vendedor-update/vendedor-update.component';
import { VendedorDeleteComponent } from './components/vendedor/vendedor-delete/vendedor-delete.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './view/home/home.component'
import { ClientesCrudComponent } from './view/clientes-crud/clientes-crud.component'
import { VendedorCrudComponent } from './view/vendedor-crud/vendedor-crud.component'
import { ProdutoCrudComponent } from './view/produto-crud/produto-crud.component'
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component'
import { VendedorCreateComponent } from './components/vendedor/vendedor-create/vendedor-create.component'
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';

const routes: Routes = [
  //rotas dos componentes
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'produto',
    component: ProdutoCrudComponent,
  },

  {
    path: 'clientes',
    component: ClientesCrudComponent,
  },

  {
    path: 'vendedor',
    component: VendedorCrudComponent,
  },

  {
    path: 'produto/create',
    component: ProdutoCreateComponent,
  },
  {
    path: 'vendedor/create',
    component: VendedorCreateComponent,
  },
  {
    path: 'cliente/create',
    component: ClienteCreateComponent,
  },
  {
    path: 'produto/update:id',
    component: ProdutoUpdateComponent,
  },
  {
    path: 'vendedor/update:id',
    component: VendedorUpdateComponent,
  },
  {
    path: 'cliente/update:id',
    component: ClienteUpdateComponent,
  },
  {
    path: 'produto/delete:id',
    component: ClienteDeleteComponent,
  },
  {
    path: 'vendedor/delete:id',
    component: VendedorDeleteComponent,
  },
  {
    path: 'cliente/delete:id',
    component: ClienteDeleteComponent,
  },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
