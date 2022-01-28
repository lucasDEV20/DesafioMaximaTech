import { ProdutoService } from './../produto.service';
import { Produto } from './../produto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  produtos: Produto[]
  displayedColumns = ['id',  'nome', 'codigo', 'action']

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.read().subscribe((produto) => {
      this.produtos = produto;
      console.log(produto)
    })
  }
}