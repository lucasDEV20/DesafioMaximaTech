package com.lucasdev.backendspring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@Entity
public class Vendedor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("id")
    private Long id;
    
    @Column(unique = true, length = 100, nullable = false)
    private String nome;

    @Column(unique = true, length = 100, nullable = false)
    private String codigo;

}
