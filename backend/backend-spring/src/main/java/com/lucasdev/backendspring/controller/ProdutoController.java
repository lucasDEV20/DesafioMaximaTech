package com.lucasdev.backendspring.controller;

import java.util.List;

import com.lucasdev.backendspring.model.Produto;
import com.lucasdev.backendspring.repository.ProdutoRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;




@RestController
@RequestMapping("/api/produto")
@AllArgsConstructor
public class ProdutoController {
    

    
    private final ProdutoRepository produtoRepository;


    @GetMapping
    public List<Produto> list() {
        return produtoRepository.findAll();
    }
    
}
