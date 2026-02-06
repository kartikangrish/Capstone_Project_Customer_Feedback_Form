package com.example.feedback_backend;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerId;
    private String email;
    private String firstName;
    private String lastName;
    private LocalDateTime createdAt = LocalDateTime.now();

    // Standard Getters and Setters
}