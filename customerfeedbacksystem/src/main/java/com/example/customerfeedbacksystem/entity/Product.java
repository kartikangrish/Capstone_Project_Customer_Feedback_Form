package com.example.customerfeedbacksystem.entity;

import java.util.List;
import jakarta.persistence.*;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    private String name;
    private String description;
    private String category;

    @OneToMany(mappedBy = "product")
    private List<Feedback> feedbacks;

    public Long getProductId() { 
    	return productId; 
    	}
    public void setProductId(Long productId) {
    	this.productId = productId; 
    	}

    public String getName() { 
    	return name; 
    	}
    public void setName(String name) { 
    	this.name = name; 
    	}

    public String getDescription() { 
    	return description; 
    	}
    public void setDescription(String description) {
    	this.description = description; 
    	}

    public String getCategory() { 
    	return category; 
    	}
    public void setCategory(String category) {
    	this.category = category; 
    	}
}

