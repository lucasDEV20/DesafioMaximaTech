import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  cliente : Cliente;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.clienteService.readById(id).subscribe(cliente => 
    {
      this.cliente = cliente;
    })

  }

  updateCliente(): void{
    this.clienteService.update(this.cliente).subscribe(() =>{
      this.clienteService.showMessage('O cliente foi alterado')
      this.router.navigate(['/cliente']);
    } )
  }

  cancel(): void {
    this.router.navigate(['/cliente']);

  }

}
