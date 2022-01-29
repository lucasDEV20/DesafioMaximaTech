import { VendedorService } from './../vendedor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendedor } from '../vendedor.model';

@Component({
  selector: 'app-vendedor-create',
  templateUrl: './vendedor-create.component.html',
  styleUrls: ['./vendedor-create.component.css']
})
export class VendedorCreateComponent implements OnInit {

  vendedor: Vendedor ={
    nome: '',
    codigo: 0,
    id: 0
  }
  constructor(private vendedorService: VendedorService, private router: Router) { }

  ngOnInit(): void {
  }

  createVendedor(): void {
    this.vendedorService.create(this.vendedor).subscribe(() => {
      this.vendedorService.showMessage('Vendedor cadastrado!')
       this.router.navigate(['/vendedor'])
    });
  }

  cancel(): void {
    this.router.navigate(['/produto'])
    this.vendedorService.showMessage('vendedor  não cadastrado')
    
  }
 

}
