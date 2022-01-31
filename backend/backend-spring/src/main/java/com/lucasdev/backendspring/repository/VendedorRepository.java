package com.lucasdev.backendspring.repository;

import java.util.List;

import com.lucasdev.backendspring.model.Vendedor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendedorRepository extends JpaRepository<Vendedor, Long> {
    
   
    }
