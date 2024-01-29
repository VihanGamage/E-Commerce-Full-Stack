package com.example.backend.repository;

import com.example.backend.entity.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

@org.springframework.stereotype.Repository
public interface ProductRepository extends MongoRepository<Product,String> {
}
