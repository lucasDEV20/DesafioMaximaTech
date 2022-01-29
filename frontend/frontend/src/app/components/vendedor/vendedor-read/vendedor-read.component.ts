import { VendedorService } from './../vendedor.service';
import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../vendedor.model';

@Component({
  selector: 'app-vendedor-read',
  templateUrl: './vendedor-read.component.html',
  styleUrls: ['./vendedor-read.component.css']
})
export class VendedorReadComponent implements OnInit {
  vendedores: Vendedor[]
  displayedColumns = ['id',  'nome', 'codigo', 'action']

  constructor(private vendedorService: VendedorService) { }

  ngOnInit(): void {
    this.vendedorService.read().subscribe((vendedor) => {
      this.vendedores = vendedor;
      console.log(vendedor)
    })
  }
}