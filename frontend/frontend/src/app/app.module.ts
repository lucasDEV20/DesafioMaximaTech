import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
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
    MatNativeDateModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
