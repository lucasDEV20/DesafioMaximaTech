# Para rodar a APi sera necessario a ligaçao com o banco de dados de dados 

## Credenciais do bando de dados 

Banco de dados PostgreSql OnLine

Host:
bdresultlte.postgresql.dbaas.com.br

Database:
bdresultlte

Username:
bdresultlte

Password:
zZCH%4Uiu



## ligaçao no dbivier
![image](https://user-images.githubusercontent.com/55209015/151728473-27f9fe96-9443-4cd5-ad1a-dc0ca5c9049d.png)

## application.properties

spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.url=jdbc:postgresql://bdresultlte.postgresql.dbaas.com.br:5432/bdresultlte
spring.datasource.username=bdresultlte
spring.datasource.password=zZCH%4Uiu
spring.jpa.hibernate.ddl-auto=update
spring.jpa.hibernate.show-sql=true
spring.jpa.show-sql=true


## Swagger

### Para ultilizar o swagger e necessario 

## dentro do porn.xml acrescente a denpencia 

<dependency>
			<groupId>org.springdoc</groupId>
			<artifactId>springdoc-openapi-ui</artifactId>
			<version>1.5.10</version>
</dependency>

## Dentro da classe princiapal acresecente 

@OpenAPIDefinition(info = @Info(title = "Api Star Wars", version = "1.0", description = "Api REST"))


## Dentro de application.properties acresecente 

#SWAGGER
springdoc.api-docs.path=/api-doc
springdoc.swagger-ui.path=/doc


# Estrutura da arvore do projeto

![image](https://user-images.githubusercontent.com/55209015/151729005-feee28ba-76a4-4a2e-bd3e-fcabf90fa340.png)





