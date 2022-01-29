package com.lucasdev.backendspring.controller;

import java.util.List;

import com.lucasdev.backendspring.model.Vendedor;
import com.lucasdev.backendspring.repository.VendedorRepository;

import org.springframework.web.bind.annotation.GetMapping;
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

   
}
