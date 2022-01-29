import { Vendedor } from './../vendedor.model';
import { Router, ActivatedRoute } from '@angular/router';
import { VendedorService } from './../vendedor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendedor-update',
  templateUrl: './vendedor-update.component.html',
  styleUrls: ['./vendedor-update.component.css']
})
export class VendedorUpdateComponent implements OnInit {

  constructor(
    private vendedorService: VendedorService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  vendedor : Vendedor;

  ngOnInit(): void {
    
    const id = +this.route.snapshot.paramMap.get('id');
    
    
    this.vendedorService.readById(id).subscribe(vendedor => 
    {
      this.vendedor = vendedor;
    })

  }

  updateVendedor(): void{
    this.vendedorService.update(this.vendedor).subscribe(() =>{
      this.vendedorService.showMessage('O vendedor foi alterado')
      this.router.navigate(['/vendedor']);
    } )
  }

  cancel(): void {
    this.router.navigate(['/vendedor']);

  }

}
