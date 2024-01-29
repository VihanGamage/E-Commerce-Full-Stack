package com.example.backend.repository;

import com.example.backend.entity.Payment;
import org.springframework.data.mongodb.repository.MongoRepository;

@org.springframework.stereotype.Repository
public interface PaymentRepository extends MongoRepository<Payment,String> {
}
