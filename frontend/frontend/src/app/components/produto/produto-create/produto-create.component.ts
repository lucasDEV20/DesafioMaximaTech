import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutoService } from './../produto.service';
@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
    nome: '',
    codigo: 0,
    id: 0
  }

  constructor(private produtoService: ProdutoService, private router: Router){}



  ngOnInit(): void {}
  
  createProduto(): void {
    this.produtoService.create(this.produto).subscribe(() => {
      //no metodo subscribe eu serei notificado quando a resposta chegar
      this.produtoService.showMessage('Produto cadastrado!')
       this.router.navigate(['/produto'])
    })
  }

  cancel(): void {
    this.router.navigate(['/produto'])
    this.produtoService.showMessage('produto não cadastrado')
    
  }
}
