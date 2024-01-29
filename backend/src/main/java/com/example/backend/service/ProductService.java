package com.example.backend.service;

import com.example.backend.entity.Product;
import java.util.List;
import java.util.Optional;

public interface ProductService {
    Optional<Product> getProduct(String id);
    String saveProduct(Product product);
    void deleteProduct(String id);
    List<Product> getAll();
    void deleteAll();
}
