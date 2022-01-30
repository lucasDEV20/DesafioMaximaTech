package com.lucasdev.backendspring;

import com.lucasdev.backendspring.model.Cliente;
import com.lucasdev.backendspring.model.Produto;
import com.lucasdev.backendspring.model.Vendedor;
import com.lucasdev.backendspring.repository.ClienteRepository;
import com.lucasdev.backendspring.repository.ProdutoRepository;
import com.lucasdev.backendspring.repository.VendedorRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "api", version = "1.0", description = "Api REST"))
public class BackendSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendSpringApplication.class, args);
	}

	

}
