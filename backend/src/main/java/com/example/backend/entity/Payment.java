package com.example.backend.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@Document(collection = "payment")
public class Payment {
    @Id
    private String cardNumber;
    private String expiryDate;
    private String cvv;
    private String cardHolderName;

    public Payment(){}

    public Payment(String cardNumber,String expiryDate,String cvv,String cardHolderName){
        this.cardNumber=cardNumber;
        this.expiryDate=expiryDate;
        this.cvv=cvv;
        this.cardHolderName=cardHolderName;
    }

}

