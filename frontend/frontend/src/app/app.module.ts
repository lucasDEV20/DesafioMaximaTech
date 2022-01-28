import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule}  from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientesCrudComponent } from './view/clientes-crud/clientes-crud.component';
import { ProdutoCrudComponent } from './view/produto-crud/produto-crud.component';
import { VendedorCrudComponent } from './view/vendedor-crud/vendedor-crud.component';
import { HomeComponent } from './view/home/home.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';

//material 
import  { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatNativeDateModule} from '@angular/material/core';

//components
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { VendedorCreateComponent } from './components/vendedor/vendedor-create/vendedor-create.component';
import { NavComponent } from './components/template/nav/nav.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { ProdutoReadComponent } from './components/produto/produto-read/produto-read.component';
import { VendedorReadComponent } from './components/vendedor/vendedor-read/vendedor-read.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';
import { VendedorDeleteComponent } from './components/vendedor/vendedor-delete/vendedor-delete.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { VendedorUpdateComponent } from './components/vendedor/vendedor-update/vendedor-update.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';




@NgModule({
  declarations: [
    AppComponent,
    ClientesCrudComponent,
    ProdutoCrudComponent,
    VendedorCrudComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ProdutoCreateComponent,
    ClienteCreateComponent,
    VendedorCreateComponent,
    NavComponent,
    ClienteReadComponent,
    ProdutoReadComponent,
    VendedorReadComponent,
    ClienteDeleteComponent,
    ProdutoDeleteComponent,
    VendedorDeleteComponent,
    ClienteUpdateComponent,
    VendedorUpdateComponent,
    ProdutoUpdateComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatSidenavModule,
    MatCardModule,
    MatListModule, 
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule,
    HttpClientModule

    
  ],
  exports: [
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
