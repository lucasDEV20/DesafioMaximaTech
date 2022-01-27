import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { Cliente } from '../cliente.model';
import { ClienteService } from './../cliente.service';
@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente : Cliente ={
    id: 0,
    nome: '',
    codigo: null
  }

  constructor(private clienteService: ClienteService, private router: Router){}



  ngOnInit(): void {}
  
  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente cadastrado!')
       this.router.navigate(['/cliente'])
    })
  }

  cancel(): void {
    this.router.navigate(['/cliente'])
    this.clienteService.showMessage('Cliente não cadastrado')
    
  }
}
