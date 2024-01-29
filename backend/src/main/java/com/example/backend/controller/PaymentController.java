package com.example.backend.controller;

import com.example.backend.entity.Payment;
import com.example.backend.service.PaymentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("payment")
public class PaymentController {

    private final PaymentServiceImpl paymentServiceImpl;

    @Autowired
    public PaymentController(PaymentServiceImpl paymentServiceImpl) {
        this.paymentServiceImpl = paymentServiceImpl;
    }

    @GetMapping("/{id}")
    public Optional<Payment> getPayment(@PathVariable String id){
        return paymentServiceImpl.getPayment(id);
    }
    @PostMapping("/save")
    public String savePayment(@RequestBody Payment payment){
        return paymentServiceImpl.savePayment(payment);
    }

    @DeleteMapping("/{id}")
    public void deletePayment(@PathVariable String id){
        paymentServiceImpl.deletePayment(id);
    }
    @GetMapping("/all")
    public List<Payment> getAll(){
        return paymentServiceImpl.getAll();
    }
    @DeleteMapping("/deleteAll")
    public void deleteAll(){
        paymentServiceImpl.deleteAll();
    }

}
