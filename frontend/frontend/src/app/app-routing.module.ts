import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './view/home/home.component'
import { ClientesCrudComponent } from './view/clientes-crud/clientes-crud.component'
import { VendedorCrudComponent } from './view/vendedor-crud/vendedor-crud.component'
import { ProdutoCrudComponent } from './view/produto-crud/produto-crud.component'
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component'
import { VendedorCreateComponent } from './components/vendedor/vendedor-create/vendedor-create.component'

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
    path: 'clientes',
    component: ClientesCrudComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
