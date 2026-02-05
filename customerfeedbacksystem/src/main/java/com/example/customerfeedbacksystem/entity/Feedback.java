package com.example.customerfeedbacksystem.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long feedbackId;

    @Min(1)
    @Max(5)
    private int rating;

    @NotBlank(message = "Comment cannot be empty")
    private String comment;

    @Column(name = "customer_name", nullable = false)
    private String customerName;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    public Long getFeedbackId() { 
        return feedbackId; 
    }
    public void setFeedbackId(Long feedbackId) {
        this.feedbackId = feedbackId; 
    }

    public int getRating() {
        return rating;
    }
    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment; 
    }
    public void setComment(String comment) {
        this.comment = comment; 
    }

    public String getCustomerName() {
        return customerName;
    }
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public Customer getCustomer() {
        return customer; 
    }
    public void setCustomer(Customer customer) { 
        this.customer = customer; 
    }

    public Product getProduct() { 
        return product; 
    }
    public void setProduct(Product product) {
        this.product = product; 
    }
}
