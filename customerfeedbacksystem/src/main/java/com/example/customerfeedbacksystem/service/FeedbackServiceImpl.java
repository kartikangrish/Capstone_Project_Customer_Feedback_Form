package com.example.customerfeedbacksystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.customerfeedbacksystem.entity.Feedback;
import com.example.customerfeedbacksystem.repository.FeedbackRepository;

import java.util.List;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Override
    public Feedback saveFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    @Override
    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }

    @Override
    public List<Feedback> getFeedbackByRating(int rating) {
        return feedbackRepository.findByRating(rating);
    }
}
