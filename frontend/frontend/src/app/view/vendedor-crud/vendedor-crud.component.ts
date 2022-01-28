import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-vendedor-crud',
  templateUrl: './vendedor-crud.component.html',
  styleUrls: ['./vendedor-crud.component.css']
})
export class VendedorCrudComponent implements OnInit {

  constructor(private headerService: HeaderService, private router: Router) { 
    headerService.headerData= {
      title: 'Visualizar vendedor',
      icon: 'person', 
      routeUrl: '/vendedor'
    }
   }

  ngOnInit(): void {
  }

  navagateToVendedorCreate() : void {
    this.router.navigate(['vendedor-create'])
  }

}
