package com.example.customerfeedbacksystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.customerfeedbacksystem.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}

