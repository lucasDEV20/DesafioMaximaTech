import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService : HeaderService, private router: Router) { 
    headerService.headerData = {
      title: 'inicio',
      icon : 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

  navigateToProdutoCreate(): void {
    this.router.navigate(['/produto/create'])
  }

  navigateToVendedorCreate(): void {
    this.router.navigate(['/Vendedor/create'])
  }

  navigateToClienteCreate(): void {
    this.router.navigate(['/Cliente/create'])
  }

}
