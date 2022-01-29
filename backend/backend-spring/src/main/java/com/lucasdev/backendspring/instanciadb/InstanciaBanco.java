package com.lucasdev.backendspring.instanciadb;

import com.lucasdev.backendspring.model.Cliente;
import com.lucasdev.backendspring.model.Produto;
import com.lucasdev.backendspring.model.Vendedor;
import com.lucasdev.backendspring.repository.ClienteRepository;
import com.lucasdev.backendspring.repository.ProdutoRepository;
import com.lucasdev.backendspring.repository.VendedorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;

/* @Configuration
//inicializara primeiro que todo mundo 
public class InstanciaBanco {
    @Autowired
    private ClienteRepository clienteRepository; // instanciando o obj repository
    @Autowired
    private ProdutoRepository produtoRepository; // instanciando o obj repository
    @Autowired
    private VendedorRepository vendedorRepository; // instanciando o obj repository

    @Bean
    //quando subir executa a seguinte sequencia 
    void iniciarBancoDeDados() {

        System.out.println("o caraio de asa");
        produtoRepository.deleteAll();
        Produto p = new Produto();
        p.setNome("computador");
        p.setCodigo("123");
        produtoRepository.save(p);

        vendedorRepository.deleteAll();
        Vendedor v = new Vendedor();
        v.setNome("joao das uva");
        v.setCodigo("123");
        vendedorRepository.save(v);

        clienteRepository.deleteAll();
        Cliente c = new Cliente();
        c.setNome("godofredo araujo");
        c.setCodigo("123");
        clienteRepository.save(c);

    }
}
 */