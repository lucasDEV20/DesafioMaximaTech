package com.lucasdev.backendspring.controller;

import java.util.List;

import com.lucasdev.backendspring.model.Produto;
import com.lucasdev.backendspring.repository.ProdutoRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
    public @ResponseBody List<Produto> list() {
        return produtoRepository.findAll();
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
    
}
