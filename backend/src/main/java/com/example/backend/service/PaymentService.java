package com.example.backend.service;
import com.example.backend.entity.Payment;

import java.util.List;
import java.util.Optional;

public interface PaymentService {
    Optional<Payment> getPayment(String cardNumber);
    String savePayment(Payment product);
    void deletePayment(String cardNumber);
    List<Payment> getAll();
    void deleteAll();
}
