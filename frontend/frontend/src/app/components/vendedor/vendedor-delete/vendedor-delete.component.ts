import { Vendedor } from './../vendedor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../vendedor.service';

@Component({
  selector: 'app-vendedor-delete',
  templateUrl: './vendedor-delete.component.html',
  styleUrls: ['./vendedor-delete.component.css']
})
export class VendedorDeleteComponent implements OnInit {

  vendedor: Vendedor;

  constructor(
    private vendedorService: VendedorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vendedorService.readById(id).subscribe(vendedor => {
      this.vendedor = vendedor;
    })
  }
   
  deleteVendedor(): void{
    this.vendedorService.delete(this.vendedor.id).subscribe(()=> {
      this.vendedorService.showMessage
      ('Vendedor excluido com sucesso');
      this.router.navigate(['/vendedor']);
    })
  }

  cancel(): void {
    this.router.navigate(['/vendedor']);
  }


}
