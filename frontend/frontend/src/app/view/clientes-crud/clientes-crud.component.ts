import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-clientes-crud',
  templateUrl: './clientes-crud.component.html',
  styleUrls: ['./clientes-crud.component.css']
})
export class ClientesCrudComponent implements OnInit {

  constructor(private heaterService: HeaderService, private router: Router) {
    heaterService.headerData = {
      title: 'Visualizar clientes',
      icon: 'face', 
      routeUrl: '/clientes'
    }
   }

  ngOnInit(): void {
  }

  navagateToClienteCreate(): void {
    this.router.navigate(['/cliente/create/'])
  }

}
