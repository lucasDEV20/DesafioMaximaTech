package com.lucasdev.backendspring.controller;

import java.util.List;

import com.lucasdev.backendspring.model.Cliente;
import com.lucasdev.backendspring.repository.ClienteRepository;

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
@RequestMapping(value = "/api/cliente") 
@AllArgsConstructor
public class ClienteController {
    

    
    private final ClienteRepository clienteRepository;


    @GetMapping(value = "/{id}")
    public @ResponseBody Cliente getById(@PathVariable Long id) {
        return clienteRepository.findById(id).get();
    }

    //o de cima recebe parametro o de baixo nao 

    @GetMapping
    public @ResponseBody List<Cliente> get(){
        return clienteRepository.findAll();
    }

    @PostMapping
    public Cliente post (@RequestBody Cliente cliente) {
      System.out.println("Post:"+cliente.toString());
        return clienteRepository.save(cliente);
    }

    @PutMapping(value = "/{id}")
    public Cliente put(@RequestBody Cliente cliente){
     
       return clienteRepository.save(cliente);

       
    }
   
    @DeleteMapping(value = "/{id}")
    public Cliente delete(@PathVariable Long id){
        Cliente cliente = this.clienteRepository.findById(id).get();
        this.clienteRepository.deleteById(id);
        return cliente;

        
    }



   

    
    
}
