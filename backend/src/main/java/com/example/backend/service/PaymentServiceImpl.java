package com.example.backend.service;

import com.example.backend.entity.Payment;
import com.example.backend.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;

    @Autowired
    public PaymentServiceImpl(PaymentRepository paymentRepository){
        this.paymentRepository = paymentRepository;
    }

    @Override
    public Optional<Payment> getPayment(String cardNumber){
        return paymentRepository.findById(cardNumber);
    }
    @Override
    public String savePayment(Payment payment){
        return paymentRepository.save(payment).getCardNumber();
    }
    @Override
    public void deletePayment(String cardNumber){
        paymentRepository.deleteById(cardNumber);
    }
    @Override
    public List<Payment> getAll(){
        return paymentRepository.findAll();
    }
    @Override
    public void deleteAll(){
        paymentRepository.deleteAll();
    }

}
