import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-produto-crud',
  templateUrl: './produto-crud.component.html',
  styleUrls: ['./produto-crud.component.css']
})
export class ProdutoCrudComponent implements OnInit {

  constructor(private heaterService: HeaderService, private router: Router) {
    heaterService.headerData = {
      title: 'Visualizar produto',
      icon: 'inventory_2', 
      routeUrl: '/produto'
    }
   }
  ngOnInit(): void {
  }

  navagateToProdutoCreate(): void {
    this.router.navigate(['/produto/create/'])
  }

}
