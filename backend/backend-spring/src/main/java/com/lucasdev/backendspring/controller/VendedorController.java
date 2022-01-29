package com.lucasdev.backendspring.controller;

import java.util.List;

import javax.el.ELException;

import com.lucasdev.backendspring.model.Vendedor;
import com.lucasdev.backendspring.repository.VendedorRepository;

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
@RequestMapping("/api/vendedor")
@AllArgsConstructor
public class VendedorController {
    

    
    private final VendedorRepository vendedorRepository;


    @GetMapping(value = "/{id}")
    public @ResponseBody Vendedor getById(@PathVariable Long id) {
        return vendedorRepository.findById(id).get();
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

     @PutMapping(value = "/{id}")
     public Vendedor put(@RequestBody Vendedor vendedor){
      
        return vendedorRepository.save(vendedor);

        
     }
    
     @DeleteMapping(value = "/{id}")
     public Vendedor delete(@PathVariable Long id){
         Vendedor vendedor = this.vendedorRepository.findById(id).get();
         this.vendedorRepository.deleteById(id);
         return vendedor;

         
     }
   
}
