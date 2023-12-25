package com.codesite.ecommece_backend.model;

import java.time.LocalDate;

import jakarta.persistence.Column;

public class PaymentInformation {
	
	@Column(name="cardHolder_name")
	private String cardHolderName;
	
	@Column(name="card_number")
	private String cardNumber;
	
	@Column(name="expiration_date")
	private LocalDate expirationDate;
	
	@Column(name="cvv")
	private String cvv;
}
