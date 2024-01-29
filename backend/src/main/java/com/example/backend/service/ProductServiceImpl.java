package com.example.backend.service;

import com.example.backend.entity.Product;
import com.example.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    @Override
    public Optional<Product> getProduct(String id){
        return productRepository.findById(id);
    }
    @Override
    public String saveProduct(Product product){
        return productRepository.save(product).getId();
    }
    @Override
    public void deleteProduct(String id){
        productRepository.deleteById(id);
    }
    @Override
    public List<Product> getAll(){
        return productRepository.findAll();
    }
    @Override
    public void deleteAll(){
        productRepository.deleteAll();
    }

}
