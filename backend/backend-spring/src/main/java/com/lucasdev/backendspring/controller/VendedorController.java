package com.lucasdev.backendspring.controller;

import java.util.List;

import javax.el.ELException;

import com.lucasdev.backendspring.model.Vendedor;
import com.lucasdev.backendspring.repository.VendedorRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/vendedor")
@AllArgsConstructor
public class VendedorController {
    

    
    private final VendedorRepository vendedorRepository;


    @GetMapping(value = "/{id}")
    public @ResponseBody List<Vendedor> list() {
        return vendedorRepository.findAll();
    }

    @GetMapping
    public @ResponseBody List<Vendedor> get(){
        return vendedorRepository.findAll();
    }

    @PostMapping
    public Vendedor  post(@RequestBody Vendedor vendedor){
        System.out.println("Post:"+vendedor.toString());
        return vendedorRepository.save(vendedor);
    }

     @PutMapping
     public Vendedor put(@RequestBody Vendedor vendedor){
      
        return vendedorRepository.save(vendedor);

        
     }
    

   
}
