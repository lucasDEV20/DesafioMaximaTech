import { Produto } from './../produto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {

  constructor(   
    
    private produtoService: ProdutoService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  produto : Produto;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.produtoService.readById(id).subscribe(produto => 
    {
      this.produto = produto;
    })

  }

  updateProduto(): void{
    this.produtoService.update(this.produto).subscribe(() =>{
      this.produtoService.showMessage('O produto foi alterado')
      this.router.navigate(['/produto']);
    } )
  }

  cancel(): void {
    this.router.navigate(['/produto']);

  }

}
