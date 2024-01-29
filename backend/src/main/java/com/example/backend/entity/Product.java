package com.example.backend.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@Document(collection = "products")
public class Product {
    @Id
    private String id;
    private String name;

    public Product(){}

    public Product(String id, String name){
        this.id=id;
        this.name=name;
    }

}
