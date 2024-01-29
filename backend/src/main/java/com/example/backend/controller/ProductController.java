package com.example.backend.controller;

import com.example.backend.entity.Product;
import com.example.backend.service.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("employee")
public class ProductController {

    private final ProductServiceImpl productServiceImpl;

    @Autowired
    public ProductController(ProductServiceImpl productServiceImpl) {
        this.productServiceImpl = productServiceImpl;
    }

    @GetMapping("/{id}")
    public Optional<Product> getProduct(@PathVariable String id){
        return productServiceImpl.getProduct(id);
    }
    @PostMapping("/save")
    public String saveProduct(@RequestBody Product product){
        return productServiceImpl.saveProduct(product);
    }
    @PostMapping("/payment")
    public String payment(@RequestBody Product product){
        return productServiceImpl.saveProduct(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable String id){
        productServiceImpl.deleteProduct(id);
    }
    @GetMapping("/all")
    public List<Product> getAll(){
        return productServiceImpl.getAll();
    }
    @DeleteMapping("/deleteAll")
    public void deleteAll(){
        productServiceImpl.deleteAll();
    }

}
