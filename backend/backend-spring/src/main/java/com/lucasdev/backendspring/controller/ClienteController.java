package com.lucasdev.backendspring.controller;

import java.util.List;

import com.lucasdev.backendspring.model.Cliente;
import com.lucasdev.backendspring.repository.ClienteRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/cliente") 
@AllArgsConstructor
public class ClienteController {
    

    
    private final ClienteRepository clienteRepository;


    @GetMapping
    public List<Cliente> list(){
        return clienteRepository.findAll();
    }
    
}
