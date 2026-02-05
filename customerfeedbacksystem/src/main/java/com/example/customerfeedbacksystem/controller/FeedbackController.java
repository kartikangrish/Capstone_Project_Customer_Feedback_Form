package com.example.customerfeedbacksystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.example.customerfeedbacksystem.entity.Feedback;
import com.example.customerfeedbacksystem.service.FeedbackService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping
    public Feedback submitFeedback(@Valid @RequestBody Feedback feedback) {
        return feedbackService.saveFeedback(feedback);
    }

    @GetMapping
    public List<Feedback> getAllFeedback() {
        return feedbackService.getAllFeedback();
    }

    @GetMapping("/rating/{rating}")
    public List<Feedback> getFeedbackByRating(@PathVariable int rating) {
        return feedbackService.getFeedbackByRating(rating);
    }
}
