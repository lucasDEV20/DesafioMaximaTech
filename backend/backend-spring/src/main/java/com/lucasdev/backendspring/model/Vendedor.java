package com.lucasdev.backendspring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Vendedor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Number id;
    
    @Column(length = 100, nullable = false)
    private String nome;

    @Column(length = 100, nullable = false)
    private Number codigo;

}
