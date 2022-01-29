package com.lucasdev.backendspring.controller;

import java.util.List;

import com.lucasdev.backendspring.model.Produto;
import com.lucasdev.backendspring.repository.ProdutoRepository;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;




@RestController
@RequestMapping(value = "/api/produto")
@AllArgsConstructor
public class ProdutoController {
    

    
    private final ProdutoRepository produtoRepository;


    @GetMapping(value = "/{id}")
    public @ResponseBody Produto getById(@PathVariable Long id) {
        return produtoRepository.findById(id).get();
    }


    @GetMapping
    public @ResponseBody List<Produto> get() {
        return produtoRepository.findAll();
    }

    @PostMapping
    public Produto post (@RequestBody
    Produto produto) {
        System.out.println("Post:"+produto.toString());
        return produtoRepository.save(produto);

    }

    @PutMapping(value = "/{id}")
    public Produto put(@RequestBody Produto produto){
     
       return produtoRepository.save(produto);

       
    }
   
    @DeleteMapping(value = "/{id}")
    public Produto delete(@PathVariable Long id){
        Produto produto = this.produtoRepository.findById(id).get();
        this.produtoRepository.deleteById(id);
        return produto;

        
    }
    
}
